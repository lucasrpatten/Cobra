const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

// Function to create the directory if it doesn't exist
async function ensureDirectoryExists(directory) {
  try {
    await fs.promises.access(directory, fs.constants.F_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      fs.promises.mkdir(directory, { recursive: true })
        .catch((err) => {
          console.error(err);
        });
    } else {
      throw error;
    }
  }
}

// Create Profiles
global.share.ipcMain.handle('create-profile', async (_, user, picture = "snakeprofile") => {
  const profilePath = global.share.app.getPath("userData") + "/Profiles/" + user + '/';
  const toWrite = {
    username: user,
    pfp: picture
  };
  try {
    await ensureDirectoryExists(profilePath);
    const file = profilePath + 'Profile.json';
    fs.writeFileSync(file, JSON.stringify(toWrite));
  } catch (error) {
    console.error(error);
  }
});

// Get Profiles
global.share.ipcMain.handle('get-profiles', async () => {
  const profilesDir = global.share.app.getPath('userData') + '/Profiles/';
  await ensureDirectoryExists(profilesDir);
  const subdirs = await readdir(profilesDir);
  let users = [];
  for (const element of subdirs) {
    const jsonFile = profilesDir + element + '/Profile.json';
    const rawData = fs.readFileSync(jsonFile);
    const jsonData = JSON.parse(rawData);
    users.push([jsonData["username"], jsonData["pfp"]]);
  }
  return users;
});
