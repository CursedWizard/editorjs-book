import fs from 'fs';
import { opendir } from 'fs/promises';
import path from 'path';
import {getEmptyLesson} from "./constants";
import {CoursesType} from "./types";
import _ from "lodash";


class ChaptersManager {
  private chaptersDir: string = "";
  private chObj!: CoursesType;
  private chapterDataBase: Record<string, string> = {};

  constructor() {
    this.getChaptersDir();
  }


  getLessonContent(chapterName: string, lessonName: string) {
    if (!this.chapterDataBase[chapterName + "/" + lessonName])
      {
        this.chapterDataBase[chapterName + "/" + lessonName] = this.__getLessonContentFromFile(chapterName, lessonName);
        return this.chapterDataBase[chapterName + "/" + lessonName]
      }
    else
      return this.chapterDataBase[chapterName + "/" + lessonName]
  }

  __getLessonContentFromFile(chapterName: string, lessonName: string) {
    const data = fs.readFileSync(
      this.chaptersDir + "/" + chapterName + "/" + lessonName + ".json",
      "utf8"
    );

    return data;
  }

  getChapterObject() {
    return this.chObj;
  }

  __getChapterObject() {
    const objectToSend: any = [];

    for (let i = 0; i < this.chObj.lessons.length; i++)
    {
      const lessons: any = [];

      for (let j = 0; j < this.chObj.lessons[i].subLessons.length; j++)
      {
        lessons.push({
          lessonName: this.chObj.lessons[i].subLessons[j],
          content: this.getLessonContent(this.chObj.lessons[i].title, this.chObj.lessons[i].subLessons[j].title)
        })
      }
      objectToSend.push({
        chapterName: this.chObj.lessons[i].title,
        lessons: lessons
      })
    }

    return objectToSend;
  }

  getChaptersDir() {
    const __dirname = path.resolve();
    const data = fs.readFileSync(__dirname + "/info.json", "utf8");
    this.chObj = JSON.parse(data);
    this.chaptersDir = this.chObj.chapterDir!;
    if (!this.chaptersDir) {
      console.log(
        "You should specify the path of your chapter's directory first. Aborting..."
      );
      return;
    }

    console.log("Directory for chepters is:\n" + JSON.parse(data).chapterDir);
  }

  async createChapter(name: string) {
    const folderName = this.chaptersDir + "/" + name;

    try {
      if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);
      this.updateChapterTable(name);
    } catch (err) {
      console.error(err);
    }
  }

  private lessonPresent(lessonName: string) {
    for (let i = 0; i < this.chObj.lessons.length; i++) {
      if (this.chObj.lessons[i].title === lessonName)
        return true;
    }
  }

  private subLessonPresent(lessonName: string, subLessonName: string) {
    for (let i = 0; i < this.chObj.lessons.length; i++) {
      if (this.chObj.lessons[i].title === lessonName)
        {
          for (let j = 0; j <this.chObj.lessons[i].subLessons.length; j++)
          {
            if (this.chObj.lessons[i].subLessons[j].title === subLessonName)
              return true;
          }
        }
    }
  }

  private updateLessonTable(chapterName: string, lessonName: string, deleteLesson?: boolean) {
    for (let i = 0; i < this.chObj.lessons.length; i++)
    {
      // no need to add this chapter since it's already there
      if (this.chObj.lessons[i].title === chapterName) {
        if (deleteLesson) {
          this.chObj.lessons[i].subLessons = this.chObj.lessons[
            i
          ].subLessons.filter((item) => item.title != lessonName);
          break;
        }

        if (this.subLessonPresent(chapterName, lessonName)) return;
        this.chObj.lessons[i].subLessons.push({
          title: lessonName,
          link: "",
          done: false,
          locked: false,
        });
        break;
      }
    }

    fs.writeFile(
      path.resolve() + "/info.json",
      JSON.stringify(this.chObj, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  }

  backupData() {
    _.forOwn(this.chapterDataBase, (value, key) => {
      const test = key.split("/");
      this.__updateLessonContentInFile(test[0], test[1], value);
    });
  }

  private updateChapterTable(chapterName: string) {
    if (!this.chObj.lessons)
      this.chObj.lessons = [];

    if (this.lessonPresent(chapterName))
      return;

    this.chObj.lessons.push({
      title: chapterName,
      price: 0,
      extended: false,
      subLessons: []
    });

    // fs.writeFile(
    //   path.resolve() + "/info.json",
    //   JSON.stringify(this.chObj, null, 2),
    //   (err) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //   }
    // );
  }
  

  async deleteAllLessons() {
    for (let i = 0; i < this.chObj.lessons.length; i++)
    {
      for (let j = 0; j < this.chObj.lessons[i].subLessons.length; j++)
      this.deleteLesson(this.chObj.lessons[i].title, this.chObj.lessons[i].subLessons[j].title);
    }
  }

  syncShit(frontEndObj: any) {
    if (typeof frontEndObj === "string")
      {
        console.log("String passed");
        return;
      }
    this.chObj = frontEndObj;
  }

  deleteLesson(chapterName: string, lessonName: string) {
    const chapterPath = this.chaptersDir + "/" + chapterName;
    if (!fs.existsSync(chapterPath)) {
      console.log(`There's no chapter named ${chapterName} found. Aborting...`);
      return;
    }
    const lessonFullName = chapterPath + "/" + lessonName + ".json";
    if (!fs.existsSync(lessonFullName)) {
      console.log(`File named ${lessonName} doesn't exists. Aborting...`)
      return;
    }
    fs.unlinkSync(lessonFullName);
    this.updateLessonTable(chapterName, lessonName, true);
  }


  updateLessonContent(chapterName: string, lessonName: string, content: string) {
    this.chapterDataBase[chapterName + "/" + lessonName] = content;
  }

  __updateLessonContentInFile(chapterName: string, lessonName: string, content: string) {
    const chapterPath = this.chaptersDir + "/" + chapterName;
    if (!fs.existsSync(chapterPath)) {
      console.log(`There's no chapter named ${chapterName} found. Aborting...`);
      return;
    }
    const lessonFullName = chapterPath + "/" + lessonName + ".json";
    try {
      fs.writeFileSync(lessonFullName, content);
    } catch (err) {
      console.error(err);
    }
  }

  async createLesson(chapterName: string, lessonName: string) {
    const chapterPath = this.chaptersDir + "/" + chapterName;
    if (!fs.existsSync(chapterPath)) {
      console.log(`There's no chapter named ${chapterName} found. Aborting...`);
      return;
    }
    const lessonFullName = chapterPath + "/" + lessonName + ".json";
    if (fs.existsSync(lessonFullName)) {
      console.log(`File name ${lessonName} already exists. Aborting...`)
      return;
    }

    fs.writeFile(lessonFullName, getEmptyLesson(lessonName), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    this.updateLessonTable(chapterName, lessonName);
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

export default ChaptersManager;
