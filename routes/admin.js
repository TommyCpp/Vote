const express = require('express');
const router = express.Router();
const authentication_token = require("../config").encrypt.authentication_token;
const VoteService = require("../service/vote.service");
const vote_service = new VoteService();

router.get("/login", (req, res, next) => {
    if (req.query.token === "SecretToken") {
        res.status(200);
        res.set("X-AUTHENTICATION-TOKEN", authentication_token);
        res.json("Login Success");
    }
    else {
        res.status(403);
        res.json("Bad Credential");
    }
});
router.post("/delete", (req, res, next) => {
    if(req.get("X-AUTHENTICATION-TOKEN") === authentication_token){
        // Delete all the database
        vote_service.cleanup((err,data)=>{
            if(err) console.log(err);
            res.json("success. The database has been clean");
        })
    }
    else{
        res.status(403);
        res.json("Bad Credential");
    }
});


module.exports = router;