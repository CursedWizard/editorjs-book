const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const Datastore = require('nedb');
const fs = require('fs');
 
let mainWindow;
global.appFolder = "/mnt/progs/dev/web/sw/editor-js-book/vers_2.0_electron/chapters";

function writeShit(shit) {
    fs.writeFile(
      "/mnt/progs/dev/web/sw/editor-js-book/vers_2.0_electron/chapters/test.txt",
      shit,
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}
 
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false
    },
  });
  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
