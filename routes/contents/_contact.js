const express = require("express");
const router = express.Router();

// *  ⇒
const situmon = require("./contact/situmon");
const toiawase = require("./contact/toiawase");

// *  ⇒
router.use("/situmon", situmon);
router.use("/toiawase", toiawase);

module.exports = router;
