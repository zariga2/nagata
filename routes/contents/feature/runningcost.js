const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("./contents/feature/_runningcost.ejs");
});

module.exports = router;
