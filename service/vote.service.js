const VoteRepository = require("../repository/vote.repository");
const CanadianService = require("../service/canadian.service");
class VoteService {
    constructor() {
        this.vote_repository = new VoteRepository();
        this.canadian_service = new CanadianService();
    }

    vote(vote, callback) {
        this.vote_repository.add(vote, callback);
    }

    cleanup(callback) {
        this.vote_repository.flushdb(callback);
    }

    hasVoted(token, callback) {
        this.vote_repository.findToken(token, callback);
    }

    getResult(target, callback) {
        this.vote_repository.getResult(target, callback)
    }
}

module.exports = VoteService;