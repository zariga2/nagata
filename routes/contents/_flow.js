const express = require("express");
const router = express.Router();

// *  ⇒
const nagare1 = require("./flow/nagare1");

// *  ⇒
router.use("/nagare1", nagare1);

module.exports = router;
