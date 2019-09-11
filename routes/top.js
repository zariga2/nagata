const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("top/_top.ejs");
});

module.exports = router;
