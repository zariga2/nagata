const express = require("express");
const router = express.Router();

// *  ⇒
const contact = require("./contents/_contact.js");

// *  ⇒
router.use("/contact", contact);

module.exports = router;
