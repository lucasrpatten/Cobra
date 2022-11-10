
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron')

global.share = { ipcMain, app }

const path = require('path');
const isDev = require('electron-is-dev');

require('./api/profiles')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // unsafe, fix later
    }
  });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

