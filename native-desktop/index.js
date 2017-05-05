const {app, BrowserWindow} = require('electron')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600,
  })
  mainWindow.loadURL('http://localhost:3001')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

const hideaway = app

hideaway.on('ready', createWindow)

hideaway.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    hideaway.quit()
  }
})

hideaway.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
