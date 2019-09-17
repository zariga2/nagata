const express = require("express");
const router = express.Router();

// *  ⇒
const tyakudatu = require("./maintenance/tyakudatu");
const oteire = require("./maintenance/oteire");

// *  ⇒
router.use("/tyakudatu", tyakudatu);
router.use("/oteire", oteire);

module.exports = router;
