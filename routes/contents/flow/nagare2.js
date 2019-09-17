const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/flow/_nagare2.ejs");
});

module.exports = router;
