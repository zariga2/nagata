const express = require("express");
const router = express.Router();

// *  ⇒
const contact = require("./contents/_contact.js");
const flow = require("./contents/_flow.js");

// *  ⇒
router.use("/contact", contact);
router.use("/flow", flow);

module.exports = router;
