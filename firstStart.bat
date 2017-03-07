@echo off
color a
echo "Installing all project dependencies..."
npm i
echo "Done"
echo "Creating folder structure for your project..."
npm run setup
echo "Done"
echo "If you want to start the webpack-dev-server hit a key else close the window"
pause
echo "Starting webpack-dev-server..."
npm start
pause
