const Conversation = require("../models/Conversation");
const serverStore = require('./socket_library');
const updateChatHistory = async (conversationId , toSpecifiedSocketId = null) =>{
    // console.log({conversationId});
    // console.log({toSpecifiedSocketId});

    const conversation = await Conversation.findById(conversationId).populate(
        {
            path:"messages",
            model:"Message",
            populate:{
                path:"sender_id",
                model:"User",
                select:"userid"
            }
        }
    )
    
    // console.log({conversation});

    if(conversation){
        const io = serverStore.getSocketServerInstance();
        
        if(toSpecifiedSocketId){
            //some change
             io.to(toSpecifiedSocketId).emit("direct-chat-history", {
              messages: conversation.messages,
              participants: conversation.participants_user_ids,
            });
        }

        console.log({ conversation });
        //check if users of this conversation are online , if yes emit to them update message

        conversation.participants_user_ids.forEach((user_id)=>{
            const activeConnection = serverStore.getActiveConnections(
              user_id.toString()
            );
            console.log({activeConnection});
            console.log({ conversation });
        })
    }
}

module.exports = {
    updateChatHistory
}