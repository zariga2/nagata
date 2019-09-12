let http = require("http");
let path = require("path");
let express = require("express");

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));

/*** ========== ルーティング ==========
// * ============================================ */
let top = require("./routes/top");
app.use("/top", top);

app.get("/", function(req, res, next) {
    res.render("_top.ejs");
});

let server = http.createServer(app);
server.listen("3000");
console.log("サーバーを起動しました");
