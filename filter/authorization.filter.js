/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {*}
 */
module.exports = (req, res, next) => {
    return req.ip;
};