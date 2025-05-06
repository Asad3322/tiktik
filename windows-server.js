// Windows compatible server launcher
import { exec } from 'child_process';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Create a temp typescript file with localhost instead of 0.0.0.0
const original = fs.readFileSync('./server/index.ts', 'utf8');
const modified = original.replace(
  `server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {`,
  `server.listen({
    port,
    host: "127.0.0.1", // Using localhost instead of 0.0.0.0 for Windows
    // reusePort option removed as it's not supported in Windows
  }, () => {`
);

// Create temporary file
fs.writeFileSync('./server/temp-index.ts', modified);

console.log('Starting server on Windows environment...');
console.log('Server will be available at http://localhost:5000');

// Set environment variable and run with command
process.env.NODE_ENV = 'development';
const cmd = 'npx tsx ./server/temp-index.ts';
console.log(`Running command: ${cmd}`);

exec(cmd, { stdio: 'inherit' }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  
  console.log(stdout);
});