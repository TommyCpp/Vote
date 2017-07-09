const redis = require("../datasource");
class VoteRepository {
    constructor() {
        this.redis = redis;
    }

    add(vote,callback) {
        this.redis.incr(vote.target,(err,reply)=>{
            if (err) throw err;
            callback();
        });
    }

    get(key,callback){
        this.redis.get(key,callback);
    }

    flushdb(callback){
        this.redis.flushdb(callback);
    }
}

module.exports = VoteRepository;