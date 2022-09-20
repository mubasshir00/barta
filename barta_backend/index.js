const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const authRoute = require('./routes/auth');
app.use(express.json());

app.use("/auth",authRoute);

server.listen(3015,()=>{
    console.log('server running');
})
