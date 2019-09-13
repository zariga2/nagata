const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./order/_step2Haisousaki.ejs");
});

module.exports = router;
