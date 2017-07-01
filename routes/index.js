var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var result = {
        "test": 1,
        "test2": 2
    };
    res.json(result);
});

module.exports = router;
