
import { makeAutoObservable, makeObservable, observable, action, reaction, computed } from 'mobx'
import {getCourseInfo, CoursesType} from "src/services/utils";
import renderMathInElement from 'katex/dist/contrib/auto-render';
require("katex/dist/katex.css");

class CoursesStore {
  constructor() {
    makeAutoObservable(this);
  }

  private infoReceived = false;
  private currentChapterName = "";
  private currentLessonName = "";
  lessonContent = {};
  lessons!: CoursesType;
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

  updateShit() {
    fetch(`http://localhost:3000/sync`, {
      method: "GET", // or 'PUT'
      mode: "cors"
    });
  }

  async getCoursesInfo() {
    if (this.infoReceived) return;
    console.log("Receiving new shit");
    this.lessons = await getCourseInfo();
    this.infoReceived = true;
  }

  updateLessonContent(content: string) {
    if (!this.newContentReceived) {
      this.newContentReceived = true;
      return;
    }
    fetch(`http://localhost:3000/updateLessonContent`, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapterName: this.currentChapterName,
        lessonName: this.currentLessonName,
        content: content,
      }),
    });
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

  async syncronizeShit() {
    await fetch(`http://localhost:3000/syncTable`, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.lessons),
    });
  }

  async createChapter(chapterName: string) {
    this.syncronizeShit();
    await fetch(`http://localhost:3000/createChapter`, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapterName: chapterName,
      }),
    });

    this.lessons = await getCourseInfo();
  }

  async createLesson(lessonName: string) {
    this.syncronizeShit();
    await fetch(`http://localhost:3000/createLesson`, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapterName: this.currentChapterName,
        lessonName: lessonName,
      }),
    });

    this.lessons = await getCourseInfo();
  }
}

const courseStorage = new CoursesStore();

export {courseStorage};
