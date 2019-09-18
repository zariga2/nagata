const express = require("express");
const router = express.Router();

// *  ⇒
const contact = require("./contents/_contact.js");
const flow = require("./contents/_flow.js");
const cost = require("./contents/_cost.js");
const maintenance = require("./contents/_maintenance.js");
const feature = require("./contents/_feature.js");

// *  ⇒
router.use("/contact", contact);
router.use("/flow", flow);
router.use("/cost", cost);
router.use("/maintenance", maintenance);
router.use("/feature", feature);

module.exports = router;
