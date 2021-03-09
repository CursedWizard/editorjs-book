"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const lodash_1 = __importDefault(require("lodash"));
class ChaptersManager {
    constructor() {
        this.chaptersDir = "";
        this.chapterDataBase = {};
        this.getChaptersDir();
    }
    getLessonContent(chapterName, lessonName) {
        if (!this.chapterDataBase[chapterName + "/" + lessonName]) {
            this.chapterDataBase[chapterName + "/" + lessonName] = this.__getLessonContentFromFile(chapterName, lessonName);
            return this.chapterDataBase[chapterName + "/" + lessonName];
        }
        else
            return this.chapterDataBase[chapterName + "/" + lessonName];
    }
    __getLessonContentFromFile(chapterName, lessonName) {
        const data = fs_1.default.readFileSync(this.chaptersDir + "/" + chapterName + "/" + lessonName + ".json", "utf8");
        return data;
    }
    syncFrontendTable(table) {
        return this.chObj = table;
    }
    getChapterObject() {
        return this.chObj;
    }
    __getChapterObject() {
        const objectToSend = [];
        for (let i = 0; i < this.chObj.lessons.length; i++) {
            const lessons = [];
            for (let j = 0; j < this.chObj.lessons[i].subLessons.length; j++) {
                lessons.push({
                    lessonName: this.chObj.lessons[i].subLessons[j],
                    content: this.getLessonContent(this.chObj.lessons[i].title, this.chObj.lessons[i].subLessons[j].title)
                });
            }
            objectToSend.push({
                chapterName: this.chObj.lessons[i].title,
                lessons: lessons
            });
        }
        return objectToSend;
    }
    getChaptersDir() {
        const __dirname = path_1.default.resolve();
        const data = fs_1.default.readFileSync(__dirname + "/info.json", "utf8");
        this.chObj = JSON.parse(data);
        this.chaptersDir = this.chObj.chapterDir;
        if (!this.chaptersDir) {
            console.log("You should specify the path of your chapter's directory first. Aborting...");
            return;
        }
        console.log("Directory for chepters is:\n" + JSON.parse(data).chapterDir);
    }
    createChapter(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const folderName = this.chaptersDir + "/" + name;
            try {
                if (!fs_1.default.existsSync(folderName))
                    fs_1.default.mkdirSync(folderName);
                this.updateChapterTable(name);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    lessonPresent(lessonName) {
        for (let i = 0; i < this.chObj.lessons.length; i++) {
            if (this.chObj.lessons[i].title === lessonName)
                return true;
        }
    }
    subLessonPresent(lessonName, subLessonName) {
        for (let i = 0; i < this.chObj.lessons.length; i++) {
            if (this.chObj.lessons[i].title === lessonName) {
                for (let j = 0; j < this.chObj.lessons[i].subLessons.length; j++) {
                    if (this.chObj.lessons[i].subLessons[j].title === subLessonName)
                        return true;
                }
            }
        }
    }
    updateLessonTable(chapterName, lessonName, deleteLesson) {
        for (let i = 0; i < this.chObj.lessons.length; i++) {
            // no need to add this chapter since it's already there
            if (this.chObj.lessons[i].title === chapterName) {
                if (deleteLesson) {
                    this.chObj.lessons[i].subLessons = this.chObj.lessons[i].subLessons.filter((item) => item.title != lessonName);
                    break;
                }
                if (this.subLessonPresent(chapterName, lessonName))
                    return;
                this.chObj.lessons[i].subLessons.push({
                    title: lessonName,
                    link: "",
                    done: false,
                    locked: false,
                });
                break;
            }
        }
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
    backupData() {
        lodash_1.default.forOwn(this.chapterDataBase, (value, key) => {
            const test = key.split("/");
            this.__updateLessonContentInFile(test[0], test[1], value);
        });
        console.log("See before writing");
        console.log(this.chObj);
        // writing table to info.json
        fs_1.default.writeFileSync(path_1.default.resolve() + "/info.json", JSON.stringify(this.chObj, null, 2));
    }
    updateChapterTable(chapterName) {
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
    deleteAllLessons() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.chObj.lessons.length; i++) {
                for (let j = 0; j < this.chObj.lessons[i].subLessons.length; j++)
                    this.deleteLesson(this.chObj.lessons[i].title, this.chObj.lessons[i].subLessons[j].title);
            }
        });
    }
    syncShit(frontEndObj) {
        if (typeof frontEndObj === "string") {
            console.log("String passed");
            return;
        }
        this.chObj = frontEndObj;
    }
    deleteLesson(chapterName, lessonName) {
        const chapterPath = this.chaptersDir + "/" + chapterName;
        if (!fs_1.default.existsSync(chapterPath)) {
            console.log(`There's no chapter named ${chapterName} found. Aborting...`);
            return;
        }
        const lessonFullName = chapterPath + "/" + lessonName + ".json";
        if (!fs_1.default.existsSync(lessonFullName)) {
            console.log(`File named ${lessonName} doesn't exists. Aborting...`);
            return;
        }
        fs_1.default.unlinkSync(lessonFullName);
        this.updateLessonTable(chapterName, lessonName, true);
    }
    updateLessonContent(chapterName, lessonName, content) {
        this.chapterDataBase[chapterName + "/" + lessonName] = content;
    }
    __updateLessonContentInFile(chapterName, lessonName, content) {
        const chapterPath = this.chaptersDir + "/" + chapterName;
        if (!fs_1.default.existsSync(chapterPath)) {
            console.log(`There's no chapter named ${chapterName} found. Aborting...`);
            return;
        }
        const lessonFullName = chapterPath + "/" + lessonName + ".json";
        try {
            fs_1.default.writeFileSync(lessonFullName, content);
        }
        catch (err) {
            console.error(err);
        }
    }
    createLesson(chapterName, lessonName) {
        return __awaiter(this, void 0, void 0, function* () {
            const chapterPath = this.chaptersDir + "/" + chapterName;
            if (!fs_1.default.existsSync(chapterPath)) {
                console.log(`There's no chapter named ${chapterName} found. Aborting...`);
                return;
            }
            const lessonFullName = chapterPath + "/" + lessonName + ".json";
            if (fs_1.default.existsSync(lessonFullName)) {
                console.log(`File name ${lessonName} already exists. Aborting...`);
                return;
            }
            this.updateLessonContent(chapterName, lessonName, constants_1.getEmptyLesson(lessonName));
            // fs.writeFile(lessonFullName, getEmptyLesson(lessonName), (err) => {
            //   if (err) {
            //     console.error(err);
            //     return;
            //   }
            // });
            this.updateLessonTable(chapterName, lessonName);
        });
    }
    testFsApi() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dir = yield promises_1.opendir(this.chaptersDir);
                try {
                    for (var dir_1 = __asyncValues(dir), dir_1_1; dir_1_1 = yield dir_1.next(), !dir_1_1.done;) {
                        const dirent = dir_1_1.value;
                        console.log(dirent.name);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (dir_1_1 && !dir_1_1.done && (_a = dir_1.return)) yield _a.call(dir_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.default = ChaptersManager;
