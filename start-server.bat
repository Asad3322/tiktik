@echo off
echo Starting TikTok Downloader...
echo Server will be accessible at http://localhost:5000
echo.
echo Press Ctrl+C to stop the server
echo.
echo Setting NODE_ENV environment variable...
set NODE_ENV=development

echo Running the application...
node windows-server.js

if %ERRORLEVEL% NEQ 0 (
  echo There was an error starting the server.
  echo Try running these commands manually:
  echo.
  echo npm install -g tsx
  echo set NODE_ENV=development
  echo npx tsx server/temp-index.ts
  echo.
  pause
)