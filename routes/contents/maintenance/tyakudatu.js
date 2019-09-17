const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/maintenance/_tyakudatu.ejs");
});

module.exports = router;
