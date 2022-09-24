const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

const directMessageHandler = async (socket,data) =>{
    try {
        // console.log("HELLO DIrect");
        const user_info = socket.user;

        const receiver_msg = JSON.parse(data)

        const { receiver_id, content } = { ...receiver_msg };

        console.log({user_info});
        console.log({ receiver_msg });
        
       // create new message 
        const message = await Message.create({
            sender_id:user_info.userid,
            content:content,
            receiver_id:receiver_id,
            type:'direct'
        })

        //check conversation is exists for two user
        const conversation = await Conversation.findOne({
          participants: { $all: [user_info.userid, receiver_id] },
        });
        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();
        }
    } catch(e){
        console.log({e});
    }
}

module.exports = {
  directMessageHandler,
};