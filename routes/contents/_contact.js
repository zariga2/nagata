const express = require("express");
const router = express.Router();

// *  ⇒
const situmon = require("./contact/situmon");

// *  ⇒
router.use("/situmon", situmon);

module.exports = router;
