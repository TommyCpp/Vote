class Vote {
    constructor(target,token) {
        this.target = target ? target:"";
        this.timestamp = new Date().getTime();
        this.token = token ? token : "";
    }


}
module.exports = Vote;