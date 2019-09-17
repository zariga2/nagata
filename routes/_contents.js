const express = require("express");
const router = express.Router();

// *  ⇒
const contact = require("./contents/_contact.js");
const flow = require("./contents/_flow.js");
const cost = require("./contents/_cost.js");

// *  ⇒
router.use("/contact", contact);
router.use("/flow", flow);
router.use("/cost", cost);

module.exports = router;
