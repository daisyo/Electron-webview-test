const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {ipcMain} = electron;

let win;

function createWindow() {
    win = new BrowserWindow({width: 1000, height: 800});
    win.loadURL('file://' + __dirname + '/index.html');
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });

    // var promptResponse;
    // ipcMain.on('prompt', function(eventRet, arg) {
    //     promptResponse = null;
    //     var promptWindow = new BrowserWindow({
    //         width: 200,
    //         height: 100,
    //         show: false,
    //         resizable: false,
    //         movable: false,
    //         alwaysOnTop: true,
    //         frame: false
    //     });
    //     arg.val = arg.val || '';
    //     console.log(arg.title);
    //     const promptHtml = '<label for="val">' + arg.title + '</label>\
    //     <input id="val" value="' + arg.val + '" autofocus />\
    //     <button onclick="require(\'electron\').ipcRenderer.send(\'prompt-response\', document.getElementById(\'val\').value);window.close()">Ok</button>\
    //     <button onclick="window.close()">Cancel</button>\
    //     <style>body {font-family: sans-serif;} button { float:right; margin-left: 10px;} label, input { margin-bottom: 10px; width: 100%; display:block;}</style>'
    //     promptWindow.loadURL('data:text/html,' + promptHtml);
    //     promptWindow.show();
    //     promptWindow.on('closed', function() {
    //         eventRet.returnValue = promptResponse;
    //         promptWindow = null;
    //     });
    // });
    // ipcMain.on('prompt-response', function(event, arg) {
    //     if (arg === '') { arg = null; }
    //     promptResponse = arg;
    // });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
