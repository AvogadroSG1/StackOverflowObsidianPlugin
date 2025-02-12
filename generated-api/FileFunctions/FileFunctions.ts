import { App, TFile } from "obsidian";

export class FileFunctions {
    constructor(private app: App) {
    }

    async getOrCreateFile(fileName: string): Promise<TFile> {
        let fileToReturn: Promise<TFile>;
        const existingFile = this.app.vault.getFileByPath(fileName);

        if (!existingFile) {
            fileToReturn = this.app.vault.create(fileName, '')
        }
        else{
            fileToReturn = Promise.resolve(existingFile);
        }

        return fileToReturn;
    }
}