const socket_library = require("../library/socket_library")

const newConnectionHandler = async (socket,io)=>{
   const userDetails = socket.user;
   socket_library.addNewConnectedUser({
     socketid: socket.id,
     userid: userDetails.userid,
   });
}

module.exports = {
    newConnectionHandler:newConnectionHandler
}