const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/cost/_seihin.ejs");
});

module.exports = router;
