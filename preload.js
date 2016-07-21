//const ipcRenderer = require('electron').ipcRenderer;

var alt = window.alert;

window.prompt = function(title, val) {
    //return ipcRenderer.sendSync('prompt', {title, val});
    alt(title);
    return title;
}

window.alert = function(msg) {
    msg = 'override';
    alt(msg);
}
