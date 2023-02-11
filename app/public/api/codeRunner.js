const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const { spawn } = require("child_process");

async function runPythonCode(code, interpreterPath) {
  return new Promise((resolve, reject) => {
    const process = spawn(interpreterPath, ["-c", code]);
    let output = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      reject(data.toString());
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(`Process exited with code ${code}`);
      }
    });
  });
}

global.share.ipcMain.handle("run-python-code", async (event, arg) => {
  try {
    const { code, interpreterPath } = arg;
    const result = await runPythonCode(code, interpreterPath);
    event.returnValue = result;
  } catch (error) {
    event.returnValue = error.toString();
  }
});
