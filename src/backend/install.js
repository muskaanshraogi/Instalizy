const install = () => {
    const exec = require('child_process').exec;

    exec('echo abcd', (error, result) => {
        if(result) {
            return console.log(result);
        }
        return console.log(error)
    })
    
}

module.exports = install;