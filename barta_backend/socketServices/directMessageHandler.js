const Message = require("../models/Message");

const directMessageHandler = async (socket,data) =>{
    try {
        // console.log("HELLO DIrect");
        const user_info = socket.user;

        const receiver_msg = JSON.parse(data)

        const { receiver_id, content } = { receiver_msg };

        console.log({user_info});
        console.log({ receiver_msg });
        
       // create new message 
        const message = await Message.create({
            sender_id:user_info.userid,
            content:content,
            receiver_id:receiver_id,
            type:'direct'
        })
        console.log({message});
    } catch(e){
        console.log({e});
    }
}

module.exports = {
  directMessageHandler,
};