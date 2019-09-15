const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./order/_cart.ejs");
});

module.exports = router;
