const express = require('express');
const router = express.Router();
const VoteRepository = require("../repository/VoteRepository");
const Vote = require("../model/Vote");
const HttpError = require("../model/HttpError");

const voteService = new require("../service/VoteService");

/* GET home page. */
router.get('/', function (req, res, next) {
    let voteRepository = new VoteRepository();
    voteRepository.add(new Vote("test"));
    res.json("OK");
});

router.route("/vote")
    .post((req, res, next) => {
        let target = req.body["target"];
        if (!target) {
            // Param Error
            res.status(404);
            res.json(new HttpError(404, "No efficient param provided"));
        }
        else {
            voteService.vote(new Vote(target))
        }
    });

module.exports = router;
