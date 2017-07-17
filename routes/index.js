const express = require('express');
const router = express.Router();
const VoteRepository = require("../repository/vote.repository");
const Vote = require("../model/Vote");
const HttpError = require("../model/HttpError");

const VoteService = require("../service/vote.service");
let vote_service = new VoteService();
const CanadianService = require("../service/canadian.service");
let canadian_service = new CanadianService();
const TokenService = require("../service/token.service");
let token_service = new TokenService();
const authorization_filter = require("../filter/authorization.filter");
const vote_limit = require("../config").vote.vote_limit;
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.set("Content-Type", "text/html");
    res.sendFile(path.resolve("public/client/vote.html"));
});


router.route("/vote")
    .post((req, res, next) => {
        let targets = req.body["target"];
        let token = req.get("X-VOTE-TOKEN");
        if (!targets || targets.length === 0 || !token || token.length === 0) {
            // Param Error
            res.status(404);
            res.json(new HttpError(404, "No efficient param provided"));
        }
        else if (!(targets instanceof Array)) {
            res.status(401);
            res.json(new HttpError(401, "Target must be an array"));
        }
        else if (targets.length > vote_limit) {
            res.status(401);
            res.json(new HttpError(401, "Providing too many target"));
        }
        else {
            vote_service.hasVoted(token, (err, data) => {
                if (data) {
                    res.status(403);
                    res.json(new HttpError(403, "Has voted"));
                }
                else {
                    token_service.save(token, () => {
                        for (let i = 0; i < targets.length; i++) {
                            vote_service.vote(new Vote(targets[i], token), () => {
                                if (i === targets.length - 1) {
                                    res.json("success");
                                }
                            });
                        }
                    })
                }
            });
        }
    })
    .get((req, res, next) => {
        //get the token use to prevent multi vote
        token_service.encrypt(req.ip, (token) => {
            res.set("X-VOTE-TOKEN", token);
            canadian_service.readFile("canadian.list.json", (data) => {
                let canadians = JSON.parse(data);
                let result = {};
                result.limit = vote_limit;
                result.canadians = canadians;
                res.json(result);
            })
        })
    });

module.exports = router;
