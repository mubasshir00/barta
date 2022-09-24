const mongoose = require('../config/mongo')
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
  author:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
});

module.exports = mongoose.model("Message",messageSchema)