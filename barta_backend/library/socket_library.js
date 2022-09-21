const connectedUsers = new Map();
const addNewConnectedUser = ({ socketid, userid }) => {
  connectedUsers.set(socketid, { userid });
  console.log("new connected users");
  console.log(connectedUsers);
};

module.exports = {
    addNewConnectedUser:addNewConnectedUser
}