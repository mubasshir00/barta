const { get_user_details } = require("../library/ReusableQuery");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

const directMessageHandler = async (socket,data) =>{
    try {
        // console.log("HELLO DIrect");
        const user_info = socket.user;

        const receiver_msg = data;

        const { receiver_id, content } = { ...receiver_msg };

        const receiver_id_db = await get_user_details({ userid: receiver_id });

        // console.log({user_info});
        // console.log({ receiver_msg });
        
       // create new message 
        const message = await Message.create({
          sender_id: user_info.user_id_db,
          content: content,
        //   receiver_id: receiver_id,
          type: "direct",
        });

        //check conversation is exists for two user
        const conversation = await Conversation.findOne({
          participants: { $all: [user_info.user_id_db, receiver_id_db] },
        });
        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();

            // perform and update to sender and receiver if is online
            // need to update later 
        } else {
          const new_conversation = await Conversation.create({
            messages: [message._id],
            participants: [user_info.user_id_db, receiver_id_db],
            participants_user_ids:[user_info.userid,receiver_id],
          });
          // perform and update to sender and receiver if is online 
          //need to update later
        }
    } catch(e){
        console.log({e});
    }
}

module.exports = {
  directMessageHandler,
};