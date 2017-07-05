const VoteRepository = require("../repository/vote.repository");
class VoteService {
    constructor() {
        this.repository = new VoteRepository();
    }
    vote(vote,callback){
        this.repository.add(vote,callback);
    }
}

module.exports = VoteService;