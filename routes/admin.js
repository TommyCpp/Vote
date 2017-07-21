const express = require('express');
const router = express.Router();
const authentication_token = require("../config").encrypt.authentication_token;
const VoteService = require("../service/vote.service");
const path = require("path");
const vote_service = new VoteService();


router.get("/", (req, res, next) => {
    if (req.query.token === "SecretToken") {
        res.status(200);
        res.set("Content-Type", "text/html");
        res.sendFile(path.resolve("public/client/admin.html"));
    }
    else {
        res.status(403);
        res.json("Bad Credential");
    }
});

router.post("/", (req, res, next) => {
    if (req.body.token === "SecretToken") {
        res.status(200);const express = require('express');
        const router = express.Router();
        const authentication_token = require("../config").encrypt.authentication_token;
        const VoteService = require("../service/vote.service");
        const path = require("path");
        const vote_service = new VoteService();


        router.get("/", (req, res, next) => {
            if (req.query.token === "SecretToken") {
                res.status(200);
                res.set("X-Authentication-Token", authentication_token);
                res.set("Content-Type", "text/html");
                res.sendFile(path.resolve("public/client/admin.html"));
            }
            else {
                res.status(403);
                res.json("Bad Credential");
            }
        });
        router.post("/delete", (req, res, next) => {
            if (req.get("X-Authentication-Token") === authentication_token) {
                // Delete all the database
                vote_service.cleanup((err, data) => {
                    if (err) console.log(err);
                    res.json("success. The database has been clean");
                })
            }
            else {
                res.status(403);
                res.json("Bad Credential");
            }
        });
        router.post("/result", (req, res, next) => {
            let target = req.body.target;
            vote_service.getResult(target, (err, data) => {
                if (err) console.log(err);
                res.json(data);
            })
        });


        module.exports = router;
        res.set("X-AUTHENTICATION-TOKEN", authentication_token);
        res.json();
    }
    else {
        res.status(403);
        res.json("Bad Credential");
    }
});
router.post("/delete", (req, res, next) => {
    if (req.get("X-AUTHENTICATION-TOKEN") === authentication_token) {
        // Delete all the database
        vote_service.cleanup((err, data) => {
            if (err) console.log(err);
            res.json("success. The database has been clean");
        })
    }
    else {
        res.status(403);
        res.json("Bad Credential");
    }
});
router.post("/result", (req, res, next) => {
    let target = req.body.target;
    vote_service.getResult(target, (err, data) => {
        if (err) console.log(err);
        res.json(data);
    })
});


module.exports = router;