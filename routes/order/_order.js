const express = require("express");
const router = express.Router();

// *  ⇒
const step1Siyou = require("./step1Siyou");
const step2Haisousaki = require("./step2Haisousaki");

// *  ⇒
router.use("/step1Siyou", step1Siyou);
router.use("/step2Haisousaki", step2Haisousaki);

module.exports = router;
