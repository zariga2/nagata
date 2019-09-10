let http = require("http");
let express = require("express");

let app = express();

app.use(function(req, res, next) {
    return res.send("Hello World");
});

let server = http.createServer(app);
server.listen("3000");
