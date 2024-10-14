# Stack Overflow for Teams Obsidian Plugin

Integrate your Stack Overflow for Teams instance with Obsidian to seamlessly access and manage your articles within your notes.

## Features

- **Article Retrieval**: Get articles from your Stack Overflow for Teams directly into Obsidian.
- **Edit and Publish**: Edit articles within Obsidian and publish them back to your Stack Overflow for Teams instance.
- **Create New Articles**: Take any Markdown file you write, and save it to Stack Overflow for Teams.

## Installation

1. **Download**: Get the latest release from the [Releases](https://github.com/AvogadroSG1/StackOverflowObsidianPlugin/releases) page.
   - Download the: `main.js`, `manifest.json`, and the `styles.css` into a folder "StackOverflowObsidianPlugin".
2. **Install Plugin**:
   - Open Obsidian.
   - Go to **Settings** > **Community plugins**.
   - Click on **Turn on Community plugins**.
   - Click the **folder icon** next to Installed plugins to open the folder where your Obsidian plugins are stored. 
       - If you **do not have a folder icon**, navigate to your Vault's home folder, then navigate to `.obsidian` (hidden by default), create a `plugins` folder, and navigate to the new folder.
   - Copy the **extracted plugin** folder into the plugins folder.
3. **Enable Plugin**:
   - **Restart** Obsidian to see the new plugin.
   - After installation, click on **Enable Toggle** to activate the plugin.

## Configuration

1. **Go To Settings**:
   - Click the **gear icon** next to the plugin in the list.
   - (or) Find it at the **bottom** of the settings list.
1. **API Credentials**:
   - Obtain your API key and instance URL from your Stack Overflow for Teams account. [Find more information in their help articles](https://stackoverflowteams.help/en/articles/7913768-stack-overflow-for-teams-api-v3)
2. **Find Team Slug**:
   - Go to your Stack Overflow for Teams instance.
   - Find your Team Slug after the "c/" in https://stackoverflowteams.com/c/{team_slug}.
3. **Set Up in Obsidian**:
   - Go to **Settings** > **Plugin Options** > **Stack Overflow for Teams**.
   - Enter your **API Key** and **Instance URL**.
   - Enter your **Team Slug**.
   - Save the settings.

## Usage

- **Retrieval**:
  - Use the command palette (`Ctrl+P` or `Cmd+P`) and select **"Get Article From {team}"**.
  - Article will be stored in the subdirectory of the team.
- **Edit and Publish**:
  - Make changes to the synced article in Obsidian.
  - Use the command palette to select **"Save Article to {team}"**.
- **Create New Articles**:
  - With any Markdown file not already part of your SO4T team.
  - Use the command palette to select **"Save Article to {team}"**.
  - Your file will be converted into a SO4T Article and stored in the {team} directory.


## Contributing

Contributions are welcome! Please:

- **Fork** the repository.
- **Create** a new branch for your feature or bug fix.
- **Submit** a pull request with a detailed description.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [Obsidian](https://obsidian.md/) for providing a powerful knowledge base framework.
- [Stack Overflow for Teams](https://stackoverflowforteams.com) for their API and services.

