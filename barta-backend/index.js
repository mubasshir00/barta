const express = require('express');
const app = express();
const http = require('http')
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');
// const  authJwt  = require('./helpers/jwt');
require("dotenv/config");
const socketServer = require('./socket');
// const session = require('express-session');

const port = process.env.PORT || 3015;
const connection_string = process.env.mongodb_connection_string;

const server = http.createServer(app);
socketServer.registerSocketServer(server);

app.use(cors());
app.use(morgan('tiny'));
// app.use(authJwt());
// app.use(session({
//     secret:"BBQ CHIPS",
//     resave:true,
//     saveUninitialized:false
// }))
app.use(express.json());
app.use("/api",router);
mongoose.connect(connection_string, {
  dbName: "BARTA",
}).then(()=>{
    console.log('DB is connected');
}).catch((err)=>{
    console.log(err);
});
app.listen(port ,()=>{
    console.log("Server is running at",port);
})