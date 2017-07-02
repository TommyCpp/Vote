var VoteRepository = function (redis) {
    this.datasource = redis;
    this.add = function (vote) {
        redis.incr(vote.target)
    }
};

module.exports = VoteRepository;