const connectedUsers = new Map();
const addNewConnectedUser = ({ socketid, userid }) => {
  connectedUsers.set(socketid, { userid });
  console.log("new connected users");
  console.log(connectedUsers);
};

const getOnlineUsers = () =>{
  const onlineUsers = [];
  connectedUsers.forEach((value,key)=>{
   onlineUsers.push({
    socketid:key,
    userid:value.userid
   })
  });
  return onlineUsers
}


module.exports = {
  addNewConnectedUser: addNewConnectedUser,
  getOnlineUsers: getOnlineUsers,
};