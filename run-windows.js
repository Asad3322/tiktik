// Windows-compatible loader for TikTok Downloader
import { spawn } from 'child_process';
import fs from 'fs';

console.log('Starting TikTok Downloader for Windows...');
console.log('Setting environment variables...');

// Set environment variable
process.env.NODE_ENV = 'development';

// Create a command to run the server with tsx (which handles TypeScript)
console.log('Starting the server with TypeScript support...');
console.log('Server will be available at: http://localhost:5000');

// Create a modified server file that uses localhost instead of 0.0.0.0
const serverFilePath = './server/index.ts';
const tempServerFilePath = './server/index.windows.ts';
const originalContent = fs.readFileSync(serverFilePath, 'utf8');

// Replace 0.0.0.0 with localhost and remove reusePort
const modifiedContent = originalContent.replace(
  `server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {`,
  `server.listen({
    port,
    host: "127.0.0.1", // Using localhost for Windows compatibility
    // reusePort removed for Windows compatibility
  }, () => {`
);

// Write the modified file
fs.writeFileSync(tempServerFilePath, modifiedContent);

// Run the server using tsx (which handles TypeScript)
const tsx = spawn('npx', ['tsx', tempServerFilePath], {
  env: { ...process.env, NODE_ENV: 'development' },
  stdio: 'inherit',
  shell: true
});

// Handle process events
tsx.on('error', (err) => {
  console.error('Failed to start server:', err);
  cleanup();
});

tsx.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  cleanup();
});

// Ensure cleanup on exit
process.on('SIGINT', () => {
  console.log('Interrupt received, cleaning up...');
  cleanup();
  process.exit(0);
});

// Cleanup function
function cleanup() {
  try {
    if (fs.existsSync(tempServerFilePath)) {
      fs.unlinkSync(tempServerFilePath);
    }
  } catch (err) {
    console.error('Error during cleanup:', err);
  }
}