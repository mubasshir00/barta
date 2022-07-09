const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');
require("dotenv/config");

const port = process.env.PORT || 3005;
const connection_string = process.env.mongodb_connection_string;

app.use(cors());
app.use(morgan('tiny'));

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