const { updateRooms } = require("../library/RoomUpdate");
const socket_library = require("../library/socket_library");

const roomJoinHandler = (socket,data) =>{
    try {
      const {roomId} = {...data} 
    //   console.log({ roomId }); 
    //   console.log({socket});
      const participant_details = {
        user_id: socket.user.userid,
        socket_id: socket.id,
      };
      const roomDetails = socket_library.getActiveRooms(roomId);
     socket_library.joinActiveRoom(roomId,participant_details);
     //sending information to connected user about new connection
     roomDetails.participants.forEach((participant)=>{
        if(participant.socket_id !== participant_details.socket_id){
            socket.to(participant.socket_id).emit("conn-prepare",{
                connectedUserSocketId : participant_details.socket_id
            })
        }
     });
     updateRooms()
    } catch(e){
        console.log({e});
    }
}

module.exports = {
    roomJoinHandler:roomJoinHandler
}