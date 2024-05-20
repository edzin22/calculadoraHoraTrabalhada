const {app, BrowserWindow} = require('electron')

let janelaPrincipal

app.on(`ready`, () => {
    janelaPrincipal = new BrowserWindow({
        width: 450,
        height: 800,
        resizable: false,

    })
    janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
})
