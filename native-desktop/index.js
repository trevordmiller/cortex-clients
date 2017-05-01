const {app, BrowserWindow} = require('electron')

let mainWindow

const createWindow = () => {
  const BrowserWindow = BrowserWindow
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600,
  })
  mainWindow.loadURL('http://localhost:3001')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

const app = app

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
