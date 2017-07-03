const VoteRepository = require("../repository/VoteRepository");
class VoteService {
    constructor() {
        this.repository = new VoteRepository();
    }
    vote(vote){
        this.repository.add(vote);
    }
}

module.exports = VoteService;