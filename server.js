let http = require("http");
let path = require("path");
let express = require("express");

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, res, next) {
    return res.render("top");
});

app.get("/eto", function(req, res, next) {
    return res.render("top");
});

app.get("/ikunobu", function(req, res, next) {
    return res.render("top");
});

app.get("/shun", function(req, res, next) {
    return res.render("top");
});

let server = http.createServer(app);
server.listen("3000");
console.log("サーバーを起動しました");
