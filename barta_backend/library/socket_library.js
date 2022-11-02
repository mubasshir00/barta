const connectedUsers = new Map();
const {v4:uuidv4} = require('uuid');
let io = null;
let activeRooms = [];

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

const addNewActiveRoom = (socket_id,user_id) =>{
  try {
    //console.log({socket_id,user_id});
    const newActiveRoom = {
      roomCreator :{
        user_id,
        socket_id
      },
      participants:[
        {
          user_id,
          socket_id
        },
      ],
      room_id: uuidv4()
    }
    //console.log({newActiveRoom});
    activeRooms = [...activeRooms,newActiveRoom];
    console.log({activeRooms});

    return newActiveRoom;
  } catch(e){
    console.log({e});
  }
}

const getActiveRooms = () =>{
  return [...activeRooms];
}

const checkActiveRoom = roomId => {
  try {
    // console.log({ activeRooms });
    const activeRoom = activeRooms.find(active => active.room_id === roomId);

    if(activeRoom){
      return {
        ...activeRoom,
      };
    } else {
      return null;
    }
  } catch (e) {
    console.log({ e });
  }
};

const roomCreateHandler = (socket) =>{
  try {
    const socket_id = socket.id;
    const user_id = socket.user.userid;
    const roomDetails = addNewActiveRoom(socket_id, user_id);
    socket.emit("room-create",{
      roomDetails
    })
  } catch(e){
    console.log({e});
  }
}

const joinActiveRoom = (roomId,new_participant_details) => {
  try {
    const room = activeRooms.find(room => room.room_id === roomId);
    activeRooms = activeRooms.filter((room)=> room.room_id !== roomId);

    const updateRoom = {
      ...room,
      participants: [...room.participants, new_participant_details],
    };
    activeRooms.push(updateRoom);
    // console.log({activeRooms});
  } catch (e) {
    console.log({ e });
  }
};

const leaveActionRoom =  (roomId,participantId) =>{
  try {
    console.log({ participantId });
    const activeRoom = activeRooms.find(room => room.room_id === roomId);
    if(activeRoom){
      const copyOfActiveRoom = {...activeRoom};
      console.log({copyOfActiveRoom});
      copyOfActiveRoom.participants.map(i => {
        console.log(i.socket_id);
      });
      copyOfActiveRoom.participants = copyOfActiveRoom.participants.filter(
        participant => {
          participant.socket_id != participantId;
        }
      );
      console.log({ copyOfActiveRoom });
      
    }
  } catch(e){
    console.log({e});
  }
}

module.exports = {
  addNewConnectedUser: addNewConnectedUser,
  getOnlineUsers: getOnlineUsers,
  setSocketServerInstance,
  getSocketServerInstance,
  getActiveConnections: getActiveConnections,
  roomCreateHandler: roomCreateHandler,
  addNewActiveRoom: addNewActiveRoom,
  checkActiveRoom: checkActiveRoom,
  joinActiveRoom: joinActiveRoom,
  getActiveRooms: getActiveRooms,
  leaveActionRoom: leaveActionRoom,
};