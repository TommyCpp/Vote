var express = require('express');
var router = express.Router();
var redis = require("../datasource");
var VoteRepository = require("../repository/VoteRepository");
var Vote = require("../model/Vote");

/* GET home page. */
router.get('/', function (req, res, next) {
    var vote_repository = new VoteRepository(redis);
    vote_repository.add(new Vote());
    res.json("OK");
});

module.exports = router;
