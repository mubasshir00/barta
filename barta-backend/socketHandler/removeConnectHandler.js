const { removeConnectedUser } = require("../serverStore");

const removeConnectionHandler = async (socket) =>{
    removeConnectedUser(socket);
}
module.exports = {removeConnectionHandler};