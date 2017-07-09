const VoteRepository = require("../repository/vote.repository");
const CanadianService = require("../service/canadian.service");
class VoteService {
    constructor() {
        this.repository = new VoteRepository();
        this.canadian_service = new CanadianService();
    }
    vote(vote,callback){
        this.repository.add(vote,callback);
    }
    cleanup(callback){
        this.repository.flushdb(callback);
    }
}

module.exports = VoteService;