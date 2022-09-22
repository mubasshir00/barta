const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender_id: {
    type:String
  },
  content: {
    type: String,
  },
  receiver_id: {
    type:String
  },
  date: {
    type: Date,
    default:Date.now(),
  },
  type: {
    type: String,
  },
});

module.exports = mongoose.model("Message",messageSchema)