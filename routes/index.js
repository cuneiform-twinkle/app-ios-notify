const express = require("express");
const router = express.Router();
const fcmRoute = require("./fcm.route");
const tokenRoute = require("./token.route");



router.use("/token", tokenRoute);

router.use("/fcm", fcmRoute);


module.exports = router;
