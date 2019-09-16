const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/contact/_kanryou.ejs");
});

module.exports = router;
