import { App, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile } from 'obsidian';
import { parse, stringify } from 'yaml';
import { Configuration, ArticlesApi, ArticleResponseModel, TeamsTeamArticlesArticleIdGetRequest, TeamsTeamArticlesArticleIdPutRequest, TeamsTeamArticlesPostRequest, ArticlePermissionsResponseModel, ArticlePermissionsRequestModel } from './generated-api'

interface StackOverflowFBBSyncSettings {
	PAT: string;
	teamSlug: string;
}

const DEFAULT_SETTINGS: StackOverflowFBBSyncSettings = {
	PAT: 'default',
	teamSlug: ""
}

let configuration = new Configuration({
	basePath: 'https://api.stackoverflowteams.com/v3',
	headers: {
		'accept': 'application/json',
		'Authorization': 'Bearer ' + ''
	}
});

const defaultTagIfNonePresent = ['obsidian'];
const defaultArticleType = 'knowledgeArticle';

export class DisplayMessageModal extends Modal {
	constructor(app: App, message: string) {
		super(app);
		this.setContent(`${message}`)
	}
}

export class GetArticleIdModal extends Modal {
	constructor(
		app: App, onSubmit: (result: string) => void) {
		super(app);
		this.setTitle("Enter the Id of the article you'd like to retrieve?");

		let articleId = '';

		new Setting(this.contentEl)
			.setName("Article Id")
			.addText((text) => {
				text.onChange((value) => {
					articleId = value;
				});
				text.inputEl.addEventListener("keydown", (event: KeyboardEvent) => {
					if (event.key === "Enter") {
						event.preventDefault(); // Prevent the default form submission behavior
						this.close();
						onSubmit(articleId); //submit the article for retrieval
					}
				}
				);
			});

		new Setting(this.contentEl)
			.addButton((btn) => {
				btn
					.setButtonText("Submit")
					.setCta()
					.onClick(() => {
						this.close();
						onSubmit(articleId);
					})
			}
			);
	}
}

export default class StackOverflowFBBSync extends Plugin {
	//this is for the settings tab
	settings: StackOverflowFBBSyncSettings = DEFAULT_SETTINGS;

	apiClient = new ArticlesApi(configuration);

	async onload() {
		await this.loadSettings();

		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'get-from-so-teams-fbb',
			name: `Get Article From ${this.settings.teamSlug}`,
			callback: () => {
				new GetArticleIdModal(this.app, (articleId: string) => {
					this.getArticleByID(articleId);
				}).open();
			}
		});

		this.addCommand({
			id: 'sync-to-so-teams-fbb',
			name: `Save Article To ${this.settings.teamSlug}`,
			checkCallback: (checking: boolean) => {
				// Conditions to check
				if (this.app.workspace.getActiveViewOfType(MarkdownView)) {
					if (!checking) {
						this.saveArticle();
					}
					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
				return false;
			}
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new StackOverflowFBBSyncSettingsTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	async onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
		await this.createArticlesApi();
	}

	async saveSettings() {
		await this.saveData(this.settings);
		await this.createArticlesApi();
	}

	/**
	 * This function is used to create the Articles API client.
	 * 
	 * @returns {Promise<void>}
	 * @memberof StackOverflowFBBSync
	 * @since 0.0.1
	 * @version 0.0.1
	 * 
	 * TODO: Determine why 'Authorization' is not being set in the headers from the generated API client.
	 */
	private async createArticlesApi(): Promise<void> {
		this.apiClient = new ArticlesApi(new Configuration({
			basePath: 'https://api.stackoverflowteams.com/v3',
			headers: {
				'accept': 'application/json',
				'Authorization': 'Bearer ' + this.settings.PAT
			}
		}));
	}

	getArticleByID(articleId: string): Promise<void | ArticleResponseModel> {
		const requestParameters = { articleId: +articleId, team: this.settings.teamSlug } as TeamsTeamArticlesArticleIdGetRequest;
		return this.apiClient.teamsTeamArticlesArticleIdGet(requestParameters)
			.then(async (article: ArticleResponseModel) => {
				const articleFolderName = `${this.settings.teamSlug}`;
				const articleFileName = `${articleFolderName}/${article.title} - ${article.id}.md`;

				this.app.vault.adapter.exists(articleFolderName)
					.then((subFolderExists: boolean) => {
						if (!subFolderExists) {
							this.app.vault.createFolder(articleFolderName)
						}
					})
					.then(() => {
						this.app.vault.adapter.exists(articleFileName).then((exists: boolean) => {
							{
								if (!exists) {
									this.app.vault.create(articleFileName, '').then((newFile: TFile) => {
										this.app.workspace.getLeaf().openFile(newFile).then(() => {
											new Notice(`Switched to the new file: ${newFile.path}`);
											//Now fill in the document with the article content
											this.populateArticleFromArticleResponseModel(newFile, article);
										}).catch((err) => {
											new Notice("Issue Switching to the new file");
											console.error("Error switching to the new file:", err);
										});
									}).catch((err) => {
										new Notice(`Error creating file: ${err}`);
									});
								} else {
									let existingFile = this.app.vault.getFileByPath(articleFileName)!;

									this.app.workspace.getLeaf().openFile(existingFile).then(() => {
										new Notice(`Switched to the new file: ${existingFile.path}`);

										//Now fill in the document with the article content
										this.populateArticleFromArticleResponseModel(existingFile, article);
									}).catch((err) => {
										new Notice("Issue Switching to the new file");
										console.error("Error switching to the new file:", err);
									});
								}
							}
						});
					});
			})
			.catch((error: any) => {
				new Notice(`Article not found or API is down.`);
			});
	}

	async saveArticle(): Promise<ArticleResponseModel | boolean | void> {
		const activeFile = this.app.workspace.getActiveFile();
		if (!activeFile) {
			new Notice('No active file found');
			return Promise.resolve(false);
		}

		return this.app.vault.cachedRead(activeFile)
			.then((content: string) => {
				let fileContent = content;

				// Extract frontmatter block (YAML block) if exists
				const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
				const frontmatterMatch = fileContent.match(frontmatterRegex);

				let frontmatter: any = {};
				let remainderOfContent = fileContent.replace(frontmatterRegex, '').trim();;
				if (frontmatterMatch) {
					// Parse the existing frontmatter, I hate this being any.
					frontmatter = parse(frontmatterMatch[1]);
				}

				if (frontmatter.articleId) {
					const updadateModel = {
						articleId: frontmatter.articleId,
						team: this.settings.teamSlug,
						articleRequestModel: {
							title: frontmatter.title ? frontmatter.title : activeFile.name.substring(0, activeFile.name.indexOf('.')),
							body: remainderOfContent,
							bodyMarkdown: remainderOfContent,
							tags: frontmatter.tags ?? defaultTagIfNonePresent,
							type: frontmatter.type ? frontmatter.type : defaultArticleType,
							permissions: frontmatter.permissions
						}
					} as TeamsTeamArticlesArticleIdPutRequest;

					return this.updateArticle(updadateModel);
				}
				else {
					const createModel = {
						team: this.settings.teamSlug,
						articleRequestModel: {
							title: frontmatter.title ? frontmatter.title : activeFile.name.substring(0, activeFile.name.indexOf('.')),
							body: remainderOfContent,
							bodyMarkdown: remainderOfContent,
							tags: frontmatter.tags ?? defaultTagIfNonePresent,
							type: frontmatter.type ? frontmatter.type : defaultArticleType,
							permissions: frontmatter.permissions
						}
					} as TeamsTeamArticlesPostRequest;

					return this.createArticle(createModel)
						.then((response) => {
							if (response) {
								response.bodyMarkdown ??= remainderOfContent.trim();
								this.populateArticleFromArticleResponseModel(activeFile, response as ArticleResponseModel).then(() => {
									activeFile.vault.rename(activeFile, `${this.settings.teamSlug}/${response.title} - ${response.id}.md`);
								});
							}
						}
						);
				}
			});
	}

	private async updateArticle(article: TeamsTeamArticlesArticleIdPutRequest) {
		return this.apiClient.teamsTeamArticlesArticleIdPut(article)
			.then((response) => {
				const message = `${response.title} updated`;
				new Notice(message);
				return true;
			})
			.catch((error: any) => {
				// Handle the error if needed
				console.error('Error saving article:', error);
				return false;
			});
	}

	private async createArticle(article: TeamsTeamArticlesPostRequest) {
		return this.apiClient.teamsTeamArticlesPost(article)
			.then((response) => {
				const message = `${response.title} created`;
				new Notice(message);
				return response;
			})
			.catch((error: any) => {
				// Handle the error if needed
				new Notice(`Error syncing with Stack Overflow for Teams: ${this.settings.teamSlug}`);
				console.error('Error saving article:', error);
				return null;
			});
	}

	private async populateArticleFromArticleResponseModel(activeFile: TFile, article: ArticleResponseModel): Promise<void> {
		let frontmatter: any = {};

		// Add or update the property
		frontmatter['articleId'] = article.id;
		frontmatter['tags'] = article.tags;
		frontmatter['communities'] = article.communities?.map(community => community.name);
		frontmatter['id'] = article.id;
		frontmatter['type'] = article.type;
		frontmatter['title'] = article.title;
		frontmatter['tags'] = article.tags?.map(tag => tag.name);
		frontmatter['owner'] = article.owner?.name;
		frontmatter['lastEditor'] = article.lastEditor?.name;
		frontmatter['creationDate'] = article.creationDate;
		frontmatter['lastActivityDate'] = article.lastActivityDate;
		frontmatter['score'] = article.score;
		frontmatter['viewCount'] = article.viewCount;
		frontmatter['shareUrl'] = article.shareUrl;
		frontmatter['isDeleted'] = article.isDeleted;
		frontmatter['isObsolete'] = article.isObsolete;
		frontmatter['isClosed'] = article.isClosed;
		frontmatter['userIsFollowing'] = article.userIsFollowing;
		frontmatter['userHasUpvoted'] = article.userHasUpvoted;
		frontmatter['userHasDownvoted'] = article.userHasDownvoted;
		frontmatter['userCanEdit'] = article.userCanEdit;
		frontmatter['permissions'] = article.permissions ? this.convertArticlePermissionsResponseModelToArticlePermissionsRequestModel(article.permissions) : null;

		// Convert the updated frontmatter back to YAML
		const updatedFrontmatter = stringify(frontmatter);

		// Rebuild the file content
		const newContent = `---\n${updatedFrontmatter}---\n\n${article.bodyMarkdown}`;

		// Write the updated content back to the file
		this.app.vault.modify(activeFile, newContent);
	}
	
	private convertArticlePermissionsResponseModelToArticlePermissionsRequestModel(permissions: ArticlePermissionsResponseModel) : ArticlePermissionsRequestModel {
		return {
			editableBy: permissions.editableBy,
			editorUserIds: permissions.editorUsers?.map(user => user.id!),
			editorUserGroupIds: permissions.editorUserGroups?.map(userGroup => userGroup.id!)
		}
	}

}

class StackOverflowFBBSyncSettingsTab extends PluginSettingTab {
	plugin: StackOverflowFBBSync;

	constructor(app: App, plugin: StackOverflowFBBSync) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('API Key')
			.setDesc('Generate this token from \"Account Settings\"--> Personal Access Tokens')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.PAT)
				.onChange(async (value) => {
					this.plugin.settings.PAT = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Team Slug')
			.setDesc('Find this in the URL of your team page')
			.addText(text => text
				.setPlaceholder('Enter your Team Slug')
				.setValue(String(this.plugin.settings.teamSlug))
				.onChange(async (value) => {
					this.plugin.settings.teamSlug = value;
					await this.plugin.saveSettings();
				}));

	}
}