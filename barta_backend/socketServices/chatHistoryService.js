const Conversation = require("../models/Conversation");
const chatUpdates = require("./../library/ChatUpdate");
const ChatHistoryHandler = async (socket,data) =>{
    try {
        

        const {userid} = socket.user;
        const {receiver_user_id} = data;

        console.log({userid});
        console.log({receiver_user_id});

        const conversation = await Conversation.findOne({
          participants_user: {
            $all: [userid, receiver_user_id],
          },
         
        });

    //    console.log(conversation);

       if(conversation){
        await chatUpdates.updateChatHistory(conversation._id.toString(),socket.id);
       }

    } catch(e){
        console.log({e});
    }
}
module.exports = {
    ChatHistoryHandler:ChatHistoryHandler
}