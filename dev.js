import { spawn } from 'node:child_process';

const args = [];
const rawArgs = process.argv.slice(2);

let port = '3000';
let hostname = '0.0.0.0';

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '--port' || arg === '-p') {
    port = rawArgs[++i] || port;
  } else if (arg.startsWith('--port=')) {
    port = arg.slice(7) || port;
  } else if (arg === '--host' || arg === '--hostname' || arg === '-H') {
    hostname = rawArgs[++i] || hostname;
  } else if (arg.startsWith('--host=')) {
    hostname = arg.slice(7) || hostname;
  } else if (arg.startsWith('--hostname=')) {
    hostname = arg.slice(11) || hostname;
  } else {
    args.push(arg);
  }
}

const child = spawn('npx', ['next', 'dev', '-p', port, '-H', hostname, ...args], {
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
