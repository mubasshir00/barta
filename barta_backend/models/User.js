const mongoose = require('../config/mongo');
// console.log({mongoose});
const User_Model = mongoose.model(
  "User",
  mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      auth_id:{
        type:String,
        required:true,
        unique:true
      },
      userid: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
      password: {
        type: String,
      },
      first_name: {
        type: String,
      },
      last_name: {
        type: String,
      },
      phone: {
        type: String,
      },
      gender: {
        type: String,
      },
      date_of_birth: {
        type: String,
      },
      level: {
        type: Number,
      },
      point: {
        type: Number,
      },
      giftcoin: {
        type: Number,
      },
      diamonds: {
        type: Number,
      },
      broadcaster_level: {
        type: Number,
      },
      crown: {
        type: Number,
      },
      achivement: {
        type: Number,
      },
      speak: {
        type: Number,
      },
      is_private: {
        type: Number,
      },
      status_active: {
        type: Number,
      },
      live_permission: {
        type: Number,
      },
      entry_effect_id: {
        type: Number,
      },
      effect_expire_at: {
        type: String,
      },
      follower_count: {
        type: Number,
      },
      following_count: {
        type: Number,
      },
      auth_type: {
        type: String,
      },
      country: {
        type: String,
      },
      device_id: {
        type: String,
      },
      device_token: {
        type: String,
      },
      device_type: {
        type: String,
      },
      profile_pic: {
        type: String,
      },
      state:{
        type :String
      },
    },
    { versionKey: false }
  ),
  "users"
);

module.exports = User_Model;