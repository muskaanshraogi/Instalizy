var remote;
try{
    remote = require('electron').remote
}catch (e) {
    
}

// Mock, testing outside electron
if(!remote){
    var remote = {}
    remote.test = 'test'
    remote.require = function (s) {
        throw 'Works well till here, run on electron for the rest!'
    }
}