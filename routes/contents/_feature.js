const express = require("express");
const router = express.Router();

// *  ⇒
const odoroki = require("./feature/odoroki");
const runningcost = require("./feature/runningcost");

// *  ⇒
router.use("/odoroki", odoroki);
router.use("/runningcost", runningcost);

module.exports = router;
