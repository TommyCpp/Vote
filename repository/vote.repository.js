const redis = require("../datasource");
class VoteRepository {
    constructor() {
        this.redis = redis;
    }

    add(vote, callback) {
        this.redis.incr(vote.target, (err, reply) => {
            if (err) throw err;
            callback();
        });
    }

    get(key, callback) {
        this.redis.get(key, callback);
    }

    flushdb(callback) {
        this.redis.flushdb(callback);
    }

    findToken(token, callback) {
        this.redis.sismember("tokens", token, (err, data) => {
                callback(err, data);
            }
        )
    }

    getResult(target, callback) {
        this.redis.get(target, callback);
    }
}

module.exports = VoteRepository;