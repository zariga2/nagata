const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./order/_step1Siyou.ejs");
});

module.exports = router;
