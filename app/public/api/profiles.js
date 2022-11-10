const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);


global.share.ipcMain.handle('create-profile', async (_, user, picture = "monke") => {
  const profilePath = global.share.app.getPath("userData") + "/Profiles/" + user + '/'
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


global.share.ipcMain.handle('get-profiles', async () => {
  const profilesDir = global.share.app.getPath('userData') + '/Profiles/'
  const subdirs = await readdir(profilesDir);
  let users = []
  for (let i = 0; i < subdirs.length; i++) {
    const jsonFile = profilesDir + subdirs[i] + '/' + subdirs[i] + '.json'
    const rawData = fs.readFileSync(jsonFile)
    const jsonData = JSON.parse(rawData);
    users.push([jsonData["username"], jsonData["pfp"]]);
  }
  return users
});