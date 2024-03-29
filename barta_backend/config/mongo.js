const mongoose = require('mongoose');
const config = require('./test.json');
const options = {
  autoIndex: true,
  serverSelectionTimeoutMS: 15000, // Keep trying to send operations for 15 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4,
};

const uri =
  "mongodb+srv://mubasshir:mubasshir@cluster0.fctkf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,options);

mongoose.connection.on('error',err=>{
    console.log(error);
})

module.exports = mongoose