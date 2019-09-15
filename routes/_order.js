const express = require("express");
const router = express.Router();

// *  ⇒
const step1Siyou = require("./order/step1Siyou");
const step2Haisousaki = require("./order/step2Haisousaki");
const step3Hiyou = require("./order/step3Hiyou");
const bihin = require("./order/bihin");
const cart = require("./order/cart");
const finish = require("./order/finish");

// *  ⇒
router.use("/step1Siyou", step1Siyou);
router.use("/step2Haisousaki", step2Haisousaki);
router.use("/step3Hiyou", step3Hiyou);
router.use("/step4Kakunin", step4Kakunin);
router.use("/bihin", bihin);
router.use("/cart", cart);
router.use("/finish", finish);

module.exports = router;
