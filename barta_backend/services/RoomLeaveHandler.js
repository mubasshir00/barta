const { checkActiveRoom, leaveActionRoom } = require("../library/socket_library");

const roomLeaveHandler = (socket,data) =>{
    try {
      const {roomId} = data;
      const active_room = checkActiveRoom(roomId)
      console.log({active_room});

      if(active_room){
        leaveActionRoom(roomId,socket.id)
      }
    } catch(e){
        console.log({e});
    }
}
module.exports ={
    roomLeaveHandler:roomLeaveHandler
}