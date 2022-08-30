const connectedUsers = new Map();

const addNewConnectedUser = ({socketId,userId}) =>{
    connectedUsers.set(socketId,{userId});
    console.log(connectedUsers);
}

const removeConnectedUser = (socket) =>{
    if(connectedUsers.has(socket.id)){
        connectedUsers.delete(socket.id);
        console.log('User disconnected');
        console.log(connectedUsers);
    }
}

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};