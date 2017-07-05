const express = require('express');
const router = express.Router();
const VoteRepository = require("../repository/vote.repository");
const Vote = require("../model/Vote");
const HttpError = require("../model/HttpError");

const VoteService = require("../service/vote.service");
let vote_service = new VoteService();
const CanadianService = require("../service/canadian.service");
let canadian_service = new CanadianService();
const authorization_filter = require("../filter/authorization.filter");

/* GET home page. */
router.get('/', function (req, res, next) {
    let vote_repository = new VoteRepository();
    vote_repository.get("测试", (err, reply) => {
        res.json(reply);
    });
});

router.route("/vote")
    .post((req, res, next) => {
        let targets = req.body["target"];
        if (!targets && targets.length !== 0) {
            // Param Error
            res.status(404);
            res.json(new HttpError(404, "No efficient param provided"));
        }
        else {
            let token = authorization_filter(req, res, next);
            for (let i = 0; i < targets.length; i++) {
                vote_service.vote(new Vote(targets[i], token), () => {
                    if (i === targets.length - 1) {
                        res.json("success");
                    }
                });
            }
        }
    })
    .get((req, res, next) => {
        canadian_service.readfile("canadian.list.json", (data) => {
            let canadians = JSON.parse(data);
            let result = {};
            result.limit = 1; // TODO: use config to import the limit
            result.canadians = canadians;
            res.json(result);
        })
    });

module.exports = router;
