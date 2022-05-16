const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
require('@electron/remote/main').initialize();
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon:'../src/assets/logo-pequeno.png',
    webPreferences: {
      enableRemoteModule: true,
    },
  });
  win.loadURL(
    isDev
    ? 'http://localhost:3000'
    : 'file://../build/index.html'
  );
}
app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
