
import fs from 'fs';
import { opendir } from 'fs/promises';
import path from 'path';


class FrontendReader {
  private indexPartLeft: string = "";
  private indexPartRight: string = "";
  private chaptersDir: string = "";

  constructor() {
    const __dirname = path.resolve();
    const data = fs.readFileSync(__dirname + "/build/index.html", "utf8");

    this.indexFile = data;
  }
  indexFile = "";

  injectVariable(variableName: string, value: Record<string, string>) {
    const privateIndex = `<script>window.${variableName} = "${JSON.stringify(
      value
    )}";</script>`;
    this.indexFile = this.indexPartLeft + privateIndex + this.indexPartRight;
  }

  getIndexFile() {
    return this.indexFile;
  }

  getChaptersDir() {
    const __dirname = path.resolve();
    const data = fs.readFileSync(__dirname + "/info.json", "utf8");
    this.chaptersDir = JSON.parse(data).chapterDir;

    console.log("Directory for chepters is:\n" + JSON.parse(data).chapterDir)
  }

  async testFsApi() {
    try {
      const dir = await opendir(this.chaptersDir);
      for await (const dirent of dir) console.log(dirent.name);
    } catch (err) {
      console.error(err);
    }
  }
}

export default FrontendReader;
