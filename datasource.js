var config = require("./config");
var redis_client = require("redis");

// Redis database setup
var redis = redis_client.createClient({
    "host": config.redis.host,
    "port": config.redis.port,
    "password": config.redis.password
});
// add error handler
redis.on("error", function (err) {
    console.log('errorevent - ' + redis.host + ':' + redis.port + ' - ' + err);
});

module.exports = redis;