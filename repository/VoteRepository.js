class VoteRepository{
    constructor(redis){
        this.redis = redis;
    }
    add(vote){
        this.redis.incr(vote.target);
    }
}

module.exports = VoteRepository;