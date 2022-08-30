const authSocket = require('./middleware/authSocket');
const { newConnectionHandler } = require('./socketHandler/newConnectionHandler');
const { removeConnectionHandler } = require('./socketHandler/removeConnectHandler');

const registerSocketServer = (server) =>{
    const io = require('socket.io')(server,{
        cors:{
            origin:"*",
            methods:["GET","POST"],
        },
    });
    io.use((socket,next)=>{
        authSocket(socket,next);
    })
    io.on("connection",(socket)=>{
        console.log('User connected');
        console.log(socket.id);
        newConnectionHandler(socket,io);

        socket.on("disconnect",()=>{
            console.log('User disconnected');
            console.log(socket);
            removeConnectionHandler(socket);
        })
        
    })
}

module.exports = {
    registerSocketServer
}