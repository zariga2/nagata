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
app.get("/header", function(req, res, next) {
  return res.render("header");
});

let server = http.createServer(app);
server.listen("3000");
console.log("サーバーを起動しました");
