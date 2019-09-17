const express = require("express");
const router = express.Router();

// *  ⇒
const seihin = require("./cost/seihin");

// *  ⇒
router.use("/seihin", seihin);

module.exports = router;
