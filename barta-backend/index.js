const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const port = process.env.PORT || 3005;

app.use(cors());
app.use(morgan('tiny'));

app.use("/api/users",router);

app.listen(port ,()=>{
    console.log("Server is running at",port);
})