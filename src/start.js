const { app, BrowserWindow } = require('electron')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 2280,
    height: 1024,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        // pathname: path.join(__dirname, '/../build/index.html'),
        // protocol: 'file:',
        pathname: 'localhost:3000',
        protocol: 'http:',
        slashes: true
      })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })  
}


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
