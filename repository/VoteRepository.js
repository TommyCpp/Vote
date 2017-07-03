const redis = require("../datasource");
class VoteRepository {
    constructor() {
        this.redis = redis;
    }

    add(vote) {
        this.redis.incr(vote.target);
    }
}

module.exports = VoteRepository;