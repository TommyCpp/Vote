class Vote {
    constructor(target) {
        this.target = target ? "" : target;
        this.timestamp = new Date().getTime();
    }


}
module.exports = Vote;