function HttpError(statusCode, msg) {
    this.status = statusCode === undefined ? 500 : statusCode;
    this.msg = msg === undefined ? "Server Error" : msg;
}

HttpError.prototype = new Error();

module.exports = HttpError;