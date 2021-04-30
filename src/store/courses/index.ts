
import { makeAutoObservable, makeObservable, observable, action, reaction, computed } from 'mobx'
import renderMathInElement from 'katex/dist/contrib/auto-render';
import {CoursesType, getCourseInfo} from '../../services/utils';
import Database from '../../utils/database';
import loki from 'lokijs'
require("katex/dist/katex.css");

class CoursesStore {
  constructor() {
    makeAutoObservable(this);
  }

  private infoReceived = false;
  private currentChapterName = "";
  private currentLessonName = "";
  private testDb!: Database;
  // private folder = remote.getGlobal('collectionDb');

  lessonContent = {};
  lessons!: CoursesType["lessons"];
  modalOpen: boolean = false;
  newContentReceived: boolean = false;
  readOnly: boolean = false;
  updateContent: boolean = true;
  currentModalEntity: string = "";
  isKatexPreview: boolean = false;

  chooseModalEntity(enity: "chapter" | "lesson") {
    this.currentModalEntity = enity as string;
    console.log(this.currentChapterName)
  }

  enableReadOnly() {
    const matches = document.querySelectorAll("input");
    matches.forEach(el => el.remove());
    const _matches = document.querySelectorAll(".cdxcarousel-removeBtn");
    _matches.forEach(el => el.remove());
    const __matches = document.querySelectorAll(".cdxcarousel-item");
    __matches.forEach(el => (el as any).style["height"] = "200px")
    const carousel_add_image = document.querySelectorAll(".cdxcarousel-addImage");
    carousel_add_image.forEach(el => el.remove());
  }

  disableKatexPreviw() {
    this.selectLesson(this.currentChapterName, this.currentLessonName);
  }

  enableKatexPreview() {
    this.updateContent = false;
    // this.enableReadOnly();
    let editable_elements = document.querySelectorAll("[contenteditable=true]");
    editable_elements.forEach(el => el.removeAttribute("contenteditable"))

    // let icon_settings = document.querySelectorAll('.ce-toolbar__settings-btn');
    // icon_settings.forEach(el => el.remove());

    renderMathInElement(document.body, {
      trust: true,
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
    });
    this.isKatexPreview = true;
  }

  getCoursesInfo() {
    if (this.infoReceived) return;
    this.testDb = new Database("/mnt/progs/dev/web/sw/editor-js-book/vers_2.0_electron/chapters");

    const loaded = () => {
        this.infoReceived = true;
        this.lessons = this.testDb.findChapter();
    };

    this.testDb.loadDatabase(loaded);
  }

  getStructure() {
      const data = this.testDb.findChapter();
      console.log(data);
  }

  takeChapterName(name: string) {
    this.currentChapterName = name;
    console.log(this.currentChapterName);
  }

  async selectLesson(chapterName: string, lessonName: string) {
    fetch(`http://localhost:3000/getLessonContent`, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapterName: chapterName,
        lessonName: lessonName,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        this.lessonContent = result;
        this.currentChapterName = chapterName;
        this.currentLessonName = lessonName;
        this.newContentReceived = false;
        this.updateContent = true;
        this.isKatexPreview = false;

      });
  }

  isSelected(chapterName: string, lessonName: string) {
    return (
      this.currentChapterName === chapterName &&
      this.currentLessonName === lessonName
    );
  }

  toggleModal(open?: boolean) {
    if (open === true) this.modalOpen = true;
    else if (open === false) this.modalOpen = false;
    else this.modalOpen = !this.modalOpen;
  }

  createChapter(chapterName: string) {
      this.testDb.addChapter(chapterName)
      this.lessons = this.testDb.findChapter();
  }

  removeAll() {
      this.testDb.db.removeCollection("users");
      console.log("Removed the whole collection btw")
  }

  async createLesson(lessonName: string) {
      this.testDb.addLesson(this.currentChapterName, lessonName);
    // this.lessons = await getCourseInfo();
  }
}

const courseStorage = new CoursesStore();

export {courseStorage};
