const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/maintenance/_runningcost.ejs");
});

module.exports = router;
