const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

// Create Profiles
global.share.ipcMain.handle('create-profile', async (_, user, picture = "snake") => {
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
      const file = profilePath + 'Profile.json'
      fs.writeFileSync(file, JSON.stringify(toWrite))
    });
});

// Get Profiles
global.share.ipcMain.handle('get-profiles', async () => {
  const profilesDir = global.share.app.getPath('userData') + '/Profiles/'
  const subdirs = await readdir(profilesDir);
  let users = []
  for (const element of subdirs) {
    const jsonFile = profilesDir + element + '/Profile.json'
    const rawData = fs.readFileSync(jsonFile)
    const jsonData = JSON.parse(rawData);
    users.push([jsonData["username"], jsonData["pfp"]]);
  }
  return users
});