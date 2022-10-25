
const socket_library = require('./socket_library')

const updateRooms = (toSpecificSocketId = null) =>{
    try{
      const io = socket_library.getSocketServerInstance();
      const active_rooms = socket_library.getActiveRooms();
      if(toSpecificSocketId){
        io.to(toSpecificSocketId).emit("active-rooms", {
          active_rooms,
        });
      }
    } catch(e){
        console.log({e});
    }
}

module.exports = {
    updateRooms:updateRooms
}