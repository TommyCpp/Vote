const salt = require("../config").encrypt.salt;
const crypto = require("crypto");
const EncryptRepository = require("../repository/encrypt.repository");
module.exports = class TokenService {
    constructor() {
        this.salt = salt;
        this.respository = new EncryptRepository();
    }

    encrypt(ip, callback) {
        //Encrypt
        let token = crypto.createHash('sha1').update(ip).update(salt).update(new Date().getTime()+"").digest('Base64');
        callback(token);
    }

    save(token,callback){
        this.respository.save(token, callback);
    }
};