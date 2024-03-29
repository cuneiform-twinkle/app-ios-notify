const fcm = require('fcm-notification');
const admin = require("firebase-admin");


// const sendAllNotification = async (req,res) => {
//   try {
//     const { notification } = req.body;
//     if (!notification)
//       return res.status(400).json({ message: 'Notification is required' });

//     const response = await sendAllNotificationService(notification);

//     res.status(200).json({
//       statusCode: 200,
//       success: true,
//       message: 'Notification sent successfully',
//       data: response,
//     });
//   } catch (error) {
//     res.status(500).json({
//       statusCode: 500,
//       success: false,
//       message: error?.message || 'Internal Server Error',
//     });
//   }
// };

// Initialize Firebase Admin SDK
const serviceAccount = require("../src/firebase/serviceAccountKey.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


const certPath = admin.credential.cert(serviceAccount);
var FCM = new fcm(certPath);



// Subscribe Route
const sendNotificationToToken = (req, res) => {
try { 
        const { token, data} = req.body;
    if (!token || !data) {
      return res.status(400).json({ message: 'Token and notification are required' });
    }
const message = {
  data: {
    title: data.title,
    body: data.body,
  },
  token: token,
};

    FCM.send(message, function(err, resp) {
            if(err){
                throw err;
            }else{
                console.log('Successfully sent notification');
                res.status(200).json({ success: true, message: 'Notification sent successfully' });
            }
        });

  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};


module.exports = {
 // sendAllNotification,
  sendNotificationToToken,
};
