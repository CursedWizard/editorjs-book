
import { makeAutoObservable, makeObservable, observable, action, reaction, computed } from 'mobx'
import renderMathInElement from 'katex/dist/contrib/auto-render';
import {CoursesType, getCourseInfo} from '../../services/utils';
import Database from '../../utils/database';
import loki from 'lokijs'
import { getEmptyLesson } from "./constants"
require("katex/dist/katex.css");

class CoursesStore {
  constructor() {
    makeAutoObservable(this);
  }

  private infoReceived = false;
  private currentChapterName = "";
  private currentLessonName = "";
  private testDb!: Database;
  pdfMode = false;
  // private folder = remote.getGlobal('collectionDb');

  lessonContent = {};
  lessons!: CoursesType["lessons"];
  modalOpen: boolean = false;
  newContentReceived: boolean = false;
  readOnly: boolean = false;
  updateContent: boolean = true;
  currentModalEntity: string = "";
  isKatexPreview: boolean = false;
  waiting = false;

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
    this.updateContent = true;
    this.isKatexPreview = false;
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

  init() {
    if (this.infoReceived) return;
    this.testDb = new Database("./chapters");

    const loaded = () => {
        this.infoReceived = true;
        this.lessons = this.testDb.getLessons();
    };

    this.testDb.loadDatabase(loaded);
  }

  togglePdfMode() {
      this.pdfMode = !this.pdfMode;
  }

  getContent() {
      // this.testDb.findLesson();
  }

  prevLesson() {
      const prev_lesson = this.testDb.getNextLesson(this.currentChapterName, this.currentLessonName, -1);

      if (prev_lesson)
          this.selectLesson(this.currentChapterName, prev_lesson.title)
  }

  nextLesson() {
      const next_lesson = this.testDb.getNextLesson(this.currentChapterName, this.currentLessonName, 1);

      if (next_lesson)
          this.selectLesson(this.currentChapterName, next_lesson.title)
  }

  takeChapterName(name: string) {
    this.currentChapterName = name;
    console.log(this.currentChapterName);
  }

  selectLesson(chapterName: string, lessonName: string) {
      // this.testDb.findLesson(chapterName, lessonName);
      this.currentChapterName = chapterName;
      this.currentLessonName = lessonName;

      const id = chapterName + lessonName;
      const article = this.testDb.getArticle(id);
      if (!article)
          {
              this.testDb.createArticle(id, getEmptyLesson(lessonName));
              const article = this.testDb.getArticle(id);
              this.lessonContent = article.data;
              console.log(article.data);
          }
      else
          this.lessonContent = article.data;
  }

  updateArticle(data: any) {
      const id = this.currentChapterName + this.currentLessonName;

      this.testDb.updateArticle(id, data);
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
      this.updateLessons();
  }

  updateLessons() {
      this.lessons = this.testDb.getLessons();
  }

  removeAll() {
      this.testDb.db.removeCollection("users");
      console.log("Removed the whole collection btw")
  }

  createLesson(lessonName: string) {
      // this.testDb.addLesson(this.currentChapterName, lessonName);
      let chapter = this.testDb.findChapter(this.currentChapterName);
      console.log(chapter)
      chapter.subLessons.push({
          title: lessonName,
          link: "",
          done: false,
          locked: false
      });
      this.testDb.structure.update(chapter);

      this.updateLessons();
  }

  updateChapter(chapter_given: any) {
      let chapter = this.testDb.findChapter(chapter_given.title);
      chapter.title = chapter_given.title;
      chapter.extended = chapter_given.extended;

      this.testDb.structure.update(chapter);
  }
}

const courseStorage = new CoursesStore();

export {courseStorage};
