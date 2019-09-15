const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./order/_step4Kakunin.ejs");
});

module.exports = router;
