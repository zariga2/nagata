const express = require("express");
const router = express.Router();

// *  ⇒
const situmon = require("./contact/situmon");
const toiawase = require("./contact/toiawase");
const kanryou = require("./contact/kanryou");

// *  ⇒
router.use("/situmon", situmon);
router.use("/toiawase", toiawase);
router.use("/kanryou", kanryou);

module.exports = router;
