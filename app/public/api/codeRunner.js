const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const { spawn } = require("child_process");

async function runPythonCode(code, interpreterPath) {
  return new Promise((resolve, reject) => {
    const process = spawn(interpreterPath || "python", ["-c", code]);
    let output = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      output += data.toString();
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(output);
      }
    });
  });
}


global.share.ipcMain.handle("run-python-code", async (_, {code, interpreterPath}) => {
   console.log(code);
   try {
    const result = await runPythonCode(code, interpreterPath);
    return result;
  } catch (error) {
    return error
  }
});
