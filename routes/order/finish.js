const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./order/_finish.ejs");
});

module.exports = router;
