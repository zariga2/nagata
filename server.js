let http = require("http");
let path = require("path");
let express = require("express");

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));

/*** ========== ルーティング ==========
// * ============================================ */
let top = require("./routes/_top");
app.use("/", top);

let order = require("./routes/order/_order.js");
app.use("/order", order);

let server = http.createServer(app);
server.listen("3000");
console.log("サーバーを起動しました");
