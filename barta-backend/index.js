const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const socketServer = require('./socketServer');

const PORT = process.env.PORT || process.env.API_PORT

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
socketServer.registerSocketServer(server);

const authRoute = require("./routes/authRoutes");
const web_route = require("./routes/web");
app.use("/api/auth",authRoute);
app.use("/api", web_route);

mongoose.connect(process.env.mongodb_connection_string).then(()=>{
    server.listen(PORT,()=>{
        console.log('Mongo Connected');
        console.log(`Server is connected on ${PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});

