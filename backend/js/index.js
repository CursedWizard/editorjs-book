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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getBuild_1 = __importDefault(require("./utils/getBuild"));
const ChaptersManager_1 = __importDefault(require("./utils/ChaptersManager"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
const app = express_1.default();
const port = 3000;
app.use(cors());
app.use(express_1.default.static("build", { index: false }));
app.use(express_1.default.json({ limit: '20mb' }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const buildReader = new getBuild_1.default();
const MainManager = new ChaptersManager_1.default();
// MainManager.createLesson("lol", "lesson-1");
app.get('/', (req, res) => {
    res.send(buildReader.getIndexFile());
});
app.get("/getShit", function (req, res) {
    res.json(MainManager.getChapterObject());
});
app.post("/createLesson", (req, res) => {
    MainManager.createLesson(req.body.chapterName, req.body.lessonName);
    res.status(200).send("OK");
});
app.post("/createChapter", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Creating new chapter named ${req.body.chapterName}...`);
    yield MainManager.createChapter(req.body.chapterName);
    res.status(200).send("OK");
}));
app.get("/deleteShit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield MainManager.deleteAllLessons();
}));
app.post("/syncTable", (req, res) => {
    console.log(`Syncing table`);
    MainManager.syncShit(req.body);
    res.status(200).send("OK");
});
app.get("/pics/*", (req, res) => {
    res.contentType('image/png');
    const lastPath = req.path.split("/")[2];
    res.sendFile(path_1.default.resolve() + "/uploads/" + lastPath);
});
app.post("/testFile", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.json({
        "success": 1,
        "file": {
            "url": `http://localhost:3000/pics/${req.file.filename}`,
        }
    });
});
app.get("/sync", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Syncing data...");
    MainManager.backupData();
    res.status(200).send("OK");
}));
app.post("/getLessonContent", (req, res) => {
    res.send(MainManager.getLessonContent(req.body.chapterName, req.body.lessonName));
});
app.post("/updateLessonContent", (req, res) => {
    const content = JSON.stringify(req.body.content);
    MainManager.updateLessonContent(req.body.chapterName, req.body.lessonName, content);
    res.status(200).send("OK");
});
app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
    // MainManager.deleteAllLessons();
    console.log(JSON.stringify(MainManager.getChapterObject()));
});
process.on("SIGINT", function () {
    MainManager.backupData();
    process.exit();
});
process.on("exit", function () {
    console.log("never see this log message");
});
