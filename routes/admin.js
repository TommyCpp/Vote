const express = require('express');
const router = express.Router();

router.get("/login", (req, res, next) => {
    if(req.query.token === "SecretToken") {
        res.status(200);
        res.set("X-AUTHENTICATION-TOKEN","")
        res.json("Login Success");
    }
    else{
        res.status(403);
        res.json("Bad Credential");
    }
});


module.exports = router;