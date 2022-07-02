const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailOrPhone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic:{
    type:String,
    required:true,
  }
  ,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  activeStatus: {
    type: Boolean,
    default: true,
  },
  address: {
    type: String,
    default: "",
  },
  apartment: {
    type: String,
    default: "",
  },
  zip: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
});

exports.User = mongoose.model('User',userSchema)
