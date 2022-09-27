const connectedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) =>{
  io = ioInstance;
}

const getSocketServerInstance = () =>{
  return io;
}

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

const getActiveConnections = (user_id)=>{
  const activeConnection = [];
  connectedUsers.forEach(function(value,key){
    console.log({user_id});
    console.log({value});
    if(value.userid === user_id){
      console.log({key});
      activeConnection.push(key);
    }
  })
  return activeConnection;
}

module.exports = {
  addNewConnectedUser: addNewConnectedUser,
  getOnlineUsers: getOnlineUsers,
  setSocketServerInstance,
  getSocketServerInstance,
  getActiveConnections: getActiveConnections,
};