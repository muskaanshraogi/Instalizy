const exec = require('child_process').exec;
const fs = require('fs')

const install = (password, script) => {
        const cmd = 'chmod +x ' + script
        exec(cmd, (error, result) => {
            if(error) 
                return 0;
        })

        exec(script, (error, result) => {

            process.stdin.setEncoding('utf8');
            process.stdin.on('data', () => {
            child.stdin.write(password + '\n')
            })

            if(result) {
                update(script)
                return 1;
            }
            return 0;
        })

    }

const update = (script) => {
    const dataBuffer = fs.readFileSync('./src/data/software.json')
    const data = dataBuffer.toString()
    const apps = JSON.parse(data)
    apps.softwares.forEach((app) => {
        if(app.script === script) {
            app.installed = "true"
            return app
        }
    })
    const newdata = JSON.stringify(apps)
    fs.writeFileSync(('./src/data/software.json'), newdata)
}

module.exports = install;