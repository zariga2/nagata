const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/flow/_nagare1.ejs");
});

module.exports = router;
