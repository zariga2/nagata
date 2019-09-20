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

let order = require("./routes/_order.js");
app.use("/order", order);

let contents = require("./routes/_contents.js");
app.use("/contents", contents);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`created server : ${port}`);
