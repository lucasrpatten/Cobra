
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron')

const path = require('path');
const fs = require('fs');
const isDev = require('electron-is-dev');

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


  // communication api

  ipcMain.handle('create-profile', async (_, user) => {
    const profilePath = app.getPath("userData") + "/Profiles"
    if (!fs.existsSync) {
      fs.mkdirSync(profilePath, (err) => {
        if (err) throw err;
      }, { recursive: true });
    }
    const toWrite = profilePath + '/' + user
    if (!fs.existsSync(toWrite)) {
      fs.writeFileSync(profilePath + '/' + user, 'hello');
    }
  });


  ipcMain.handle('get-profiles', async () => {
    const files = fs.readdirSync(app.getPath('userData') + '/Profiles')
    return files
  })


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

