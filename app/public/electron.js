
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron')

const path = require('path');
const fs = require('fs');
const isDev = require('electron-is-dev');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const getDirName = require('path').dirname;

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

  ipcMain.handle('create-profile', async (_, user, picture = "monke") => {
    const profilePath = app.getPath("userData") + "/Profiles/" + user + '/'
    const toWrite = {
      username: user,
      pfp: picture
    }
    fs.promises.mkdir(profilePath, { recursive: true })
      .catch(() => {
        console.error();
      })
      .then(() => {
        const file = profilePath + user + '.json'
        fs.writeFileSync(file, JSON.stringify(toWrite))
      });
  });


  ipcMain.handle('get-profiles', async () => {
    const profilesDir = app.getPath('userData') + '/Profiles'
    const subdirs = await readdir();
    let users = []
    for (let i = 0; i < subdirs.length; i++) {
      const jsonFile = profilesDir + subdirs[i] + '/' + subdirs[i] + '.json'
      const rawData = fs.readFileSync(jsonFile)
      const jsonData = JSON.parse(rawData);
      users.push([jsonData["username"], jsonData["pfp"]]);
    }
    return users
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

