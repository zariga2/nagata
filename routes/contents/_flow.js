const express = require("express");
const router = express.Router();

// *  ⇒
const nagare1 = require("./flow/nagare1");
const nagare2 = require("./flow/nagare2");

// *  ⇒
router.use("/nagare1", nagare1);
router.use("/nagare2", nagare2);

module.exports = router;
