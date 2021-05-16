const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const Datastore = require('nedb');
const fs = require('fs');
const {ipcMain} = require('electron');
const puppeteer = require('puppeteer')


async function html2pdf() {

  // launch a new chrome instance
  const browser = await puppeteer.launch({
    headless: true
  })

  // create a new page
  const page = await browser.newPage()

  // set your html as the pages content
  const html = fs.readFileSync(`./test.html`, 'utf8')
  await page.setContent(html, {
    waitUntil: 'domcontentloaded'
  })

  // create a pdf buffer
  const pdfBuffer = await page.pdf({
    format: 'A4'
  })


    await page.waitFor(4000);
  // or a .pdf file
  await page.pdf({
    format: 'A4',
    path: `./do_you_venwork.pdf`,
      printBackground: true
  })

  // close the browser
  await browser.close()
}

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

// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
    html2pdf();
});

 
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
