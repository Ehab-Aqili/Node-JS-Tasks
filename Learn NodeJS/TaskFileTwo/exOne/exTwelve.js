const { spawn } = require('child_process');

const command = 'ping';
const args = ['www.google.com'];

const pingProcess = spawn(command, args);

pingProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

pingProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

pingProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
