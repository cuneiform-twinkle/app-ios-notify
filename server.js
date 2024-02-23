const express = require("express");
const cors = require("cors");
const path = require('path');
const dbConfig = require("./config/db.js");
const routes = require("./routes/index.js");
 const dotenv = require("dotenv");
// const firebase = require("./src/firebase/index.js");



dotenv.config();
const app = express();

const PORT = process.env.PORT;


app.use(express.static(path.join(__dirname, "client")));

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.get('/', async (req, res) => {
  res.send('OK');
});



dbConfig(process.env.LOCAL_URL, process.env.DB_NAME);

// const sendNotification = async () =>{
//     try{
//          await firebase.messaging.send({
//          token:"",
//          notification:{
//             title:"This is title",
//             body:"This is body"
//             }
//        })
//        console.log("Notification Sent Successfully...!!!")
//     } catch(error) {
//       console.log("Notification failed...",error);
//     }
// }

// setTimeout(()=>{
//     sendNotification()
// },2000)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




