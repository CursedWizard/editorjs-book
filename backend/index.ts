import express from 'express';
import FrontendReader from './utils/getBuild';
import ChaptersManager from "./utils/ChaptersManager";
import bodyParser from "body-parser"
const cors = require('cors');
 
const app = express()
const port = 3000

app.use(cors())
app.use(express.static("build", {index: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const buildReader = new FrontendReader();

const MainManager = new ChaptersManager();
// MainManager.createLesson("lol", "lesson-1");

app.get('/', (req, res) => {
  res.send(buildReader.getIndexFile());
})

app.get("/getShit", function (req,res) {
  res.json(MainManager.getChapterObject());
});

app.post("/createLesson", (req,res) => {
  MainManager.createLesson(req.body.chapterName, req.body.lessonName);
  res.status(200).send("OK");
})

app.post("/createChapter", async (req,res) => {
  console.log(`Creating new chapter named ${req.body.chapterName}...`)
  await MainManager.createChapter(req.body.chapterName);
  res.status(200).send("OK");
})

app.get("/deleteShit", async (req, res) => {
  await MainManager.deleteAllLessons();
})

app.get("/sync", async (req, res) => {
  console.log("Syncing data...")
  MainManager.backupData();
  res.status(200).send("OK");
})

app.post("/getLessonContent", (req, res) => {
  res.send(MainManager.getLessonContent(req.body.chapterName, req.body.lessonName));
})

app.post("/updateLessonContent", (req, res) => {
  const content = JSON.stringify(req.body.content)
  MainManager.updateLessonContent(req.body.chapterName, req.body.lessonName, content);
  res.status(200).send("OK");
})


app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
  // MainManager.deleteAllLessons();
  console.log(JSON.stringify(MainManager.getChapterObject()))
})

process.on("SIGINT", function() {
  MainManager.backupData();
  process.exit();
});

process.on("exit", function() {
  console.log( "never see this log message" );
});
