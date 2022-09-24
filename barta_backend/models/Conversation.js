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
    ]
});

module.exports = mongoose.model("Conversation",conversationSchema);