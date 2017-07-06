const redis = require("../datasource");
module.exports = class EncryptRepository {
    constructor() {
        this.datasource = redis;
    }

    save(token, callback) {
        this.datasource.sadd("tokens", token, (err, data) => {
            if (err) throw err;
            callback(token);
        })
    }

};