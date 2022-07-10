const registerSocketServer = (server) =>{
    const io = require('socket.io')(server,{
        cors:{
            origin:"*",
            methods: ["GET","POST"],
        },
    });
    io.on("connection",(socket)=>{
        console.log('User Connected');
        console.log(socket.id);
    })
}

module.exports = {
    registerSocketServer
}