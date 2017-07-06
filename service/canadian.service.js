let fs = require("fs");

module.exports = class CanadianService {
    constructor() {
        this.fs = fs;
    }

    readFile(path, callback) {
        this.fs.readFile(path,'utf8', (err, data) => {
            if(err) throw err;
            callback(data);
        });
    }
};