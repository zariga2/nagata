const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/feature/_odoroki.ejs");
});

module.exports = router;
