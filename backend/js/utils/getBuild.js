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
class FrontendReader {
    constructor() {
        this.indexPartLeft = "";
        this.indexPartRight = "";
        this.chaptersDir = "";
        this.indexFile = "";
        const __dirname = path_1.default.resolve();
        const data = fs_1.default.readFileSync(__dirname + "/build/index.html", "utf8");
        this.indexFile = data;
    }
    getPic() {
        const __dirname = path_1.default.resolve();
        const data = fs_1.default.readFileSync(__dirname + "/uploads/afdf9df8e594149141d7e8de187de9d8", "utf8");
        return data;
    }
    injectVariable(variableName, value) {
        const privateIndex = `<script>window.${variableName} = "${JSON.stringify(value)}";</script>`;
        this.indexFile = this.indexPartLeft + privateIndex + this.indexPartRight;
    }
    getIndexFile() {
        return this.indexFile;
    }
    getChaptersDir() {
        const __dirname = path_1.default.resolve();
        const data = fs_1.default.readFileSync(__dirname + "/info.json", "utf8");
        this.chaptersDir = JSON.parse(data).chapterDir;
        console.log("Directory for chepters is:\n" + JSON.parse(data).chapterDir);
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
exports.default = FrontendReader;
