const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(
    {
      width: 800, 
      height: 600
    });
  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, './build/js/app.js'),
      protocol: 'file:',
      slashes: true
  }));

  //mainWindow.openDevTools();

  mainWindow.on('closed', () => {
    console.log("closed")
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  console.log("window-all-closed")
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  console.log("active")
  if (mainWindow === null) {
    createWindow();
  }
});