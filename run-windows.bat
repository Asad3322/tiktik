@echo off
TITLE TikTok Downloader for Windows
echo ======================================
echo  TikTok Downloader - Windows Version
echo ======================================
echo.

echo Checking for Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo ERROR: Node.js is not installed or not in your PATH
  echo Please install Node.js from https://nodejs.org/
  echo.
  pause
  exit /b 1
)

echo Installing required packages...
call npm install
if %ERRORLEVEL% NEQ 0 (
  echo Failed to install packages
  pause
  exit /b 1
)

echo Installing tsx (TypeScript executor)...
call npm install -g tsx
if %ERRORLEVEL% NEQ 0 (
  echo Failed to install tsx globally
  pause
  exit /b 1
)

echo.
echo Starting the application...
echo The server will be available at http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

node run-windows.js

echo.
echo Server stopped. Press any key to exit...
pause >nul