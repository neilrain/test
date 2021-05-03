var fs = require('fs');

class FileManager {
    constructor(fileName){
        this.fileName = fileName;
    }

    create() {

        fs.appendFile(this.fileName, 'Hello content!', function (err) {
        });

        return fs.existsSync(this.fileName);
    }

    get() {

        fs.appendFile(this.fileName, 'Hello content!', function (err) {
        });

        return fs.existsSync(this.fileName);
    }
    /*
    update() {

        fs.appendFile(this.fileName, 'Hello content!', function (err) {
        });

        return fs.existsSync(this.fileName);
    }
    */
}


module.exports = { FileManager };