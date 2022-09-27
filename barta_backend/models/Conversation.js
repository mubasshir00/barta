const mongoose = require('../config/mongo');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    participants:[
        {
            type: Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    messages:[
        {
            type:Schema.Types.ObjectId,
            ref:"Message",
        }
    ],
    participants_user_ids:[
        {
          
        }
    ]
});

module.exports = mongoose.model("Conversation",conversationSchema);