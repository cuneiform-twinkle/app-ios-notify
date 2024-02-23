const express = require("express");
const router = express.Router();


const fcmController = require('../controllers/fcm.controller');


// router.post('/send-all-notification', fcmController.sendAllNotification);
router.post('/send-notification-to-token', fcmController.sendNotificationToToken);


module.exports = router;