
import fs from "fs"
import path from 'path'
import Datastore from 'nedb'
import loki from "lokijs";
import {CoursesType} from "../services/utils";

class Database {
    private appFolder: string;
    private isLoaded = false;
    db!: loki;

    structure!: Collection<any>;
    content!: Collection<any>;

    constructor(appFolder: string) {
        this.appFolder = path.join(appFolder, "editorjs_book.db");
        // this.loadDatabase(path.join(appFolder, "editorjs_book.db"));
    }

    loadDatabase(onLoad: () => void): void {
        this.isLoaded = true;

        const loadHand = () => {
            // if database did not exist it will be empty so I will intitialize here
            this.structure = this.db.getCollection("structure");
            if (this.structure === null) {
                this.structure = this.db.addCollection("structure");
            }

            this.content = this.db.getCollection("content");
            if (this.content === null) {
                this.content = this.db.addCollection("content");
            }
            onLoad();
        };

        this.db = new loki(this.appFolder, {
            autoload: true,
            autoloadCallback: loadHand,
            autosave: true,
            autosaveInterval: 3000,
        });

    }

    getArticle(id: string) {
        const idFilter = (metaArticle: any) => {
            return metaArticle.id === id
        }
        return this.content.where(idFilter)[0];
    }

    createArticle(id: string, data: any) {
        const articleMeta = {
            id: id,
            data: data
        }
        this.content.insert(articleMeta);
    }

    addLesson(chapterName: string, lessonName: string) {
        const result = this.structure.findOne({ title: { $eq: chapterName } });
        console.log(result);

        this.structure.findOne()
    }

    updateArticle(id: string, data: any) {
        const idFilter = (article: any) => {
            return article.id === id
        }
        const article = this.content.where(idFilter)[0]
        article.data = data;

        this.content.update(article);
    }

    addChapter(chapterName: string) {
        this.structure.insert({
            title: chapterName,
            extended: false,
            indexNumber: 1,
            price: 0,
            subLessons: [],
        });
        console.log("inserted new chapter");
    }

    getNextLesson(chapterName: string, lessonName: string, step: number) {
        const lessons = this.findLessons(chapterName, lessonName);
        const titleFilter = (lesson: any) => lesson.title === lessonName;

        if (lessons)
            {
                const idx = lessons.findIndex(titleFilter);
                return lessons[idx+step]
            }
        else
            return null

    }

    getConent(chapterName: string, lessonName: string) {


    }

    findLessons(chapterName: string, lessonName: string) {
        const chapterNameFilter = (chapter: any) => {
            return chapterName === chapter.title
        }

        const chapter = this.structure.where(chapterNameFilter)[0] as CoursesType["lessons"][0];
        let lessons = [];
        if (chapter)
            lessons = chapter.subLessons;
        else
            return null

        // const lesson = lessons.find(lesson => {
        //     return lesson.title === lessonName;
        // })
        return lessons;
    }

    findChapter(name: string) {
        const nameFilter = (chapter: any) => {
            return name === chapter.title
        }
        return this.structure.where(nameFilter)[0];
    }

    getLessons() {
        return this.structure.find({});
    }

    save() {
        // this.db.saveDatabase();
    }
}

export default Database;
