
import fs from "fs"
import path from 'path'
import Datastore from 'nedb'
import loki from "lokijs";

class Database {
    private appFolder: string;
    private isLoaded = false;
    db!: loki;

    private structure!: Collection<any>;
    private content!: Collection<any>;

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

    addLesson(chapterName: string, lessonName: string) {
        const result = this.structure.findOne({ title: { $eq: chapterName } });
        console.log(result);
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

    findChapter() {
        return this.structure.find({});
    }

    save() {
        // this.db.saveDatabase();
    }
}

export default Database;
