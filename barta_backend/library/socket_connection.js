const socket = require('socket.io');
const express = require('express');
const app = express();

const http = require('http');
const { newConnectionHandler } = require('../socketServices/newConnectionService');
const authSocket = require('../middleware/authSocket');
const server_library = require('./../library/socket_library');
const jwt = require("jsonwebtoken");
const { directMessageHandler } = require('../socketServices/directMessageHandler');

const port = 4444;

const server = http.createServer(app);

let con = server.listen(port,()=>{
    console.log(`socket server listening on ${port}`);
})

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('HELLO from SOcket server')
})

const io = socket(con,{
    cors:{
        origin:"*",
        methods : ["GET","POST"],
    }
});

io.use((socket ,next)=>{
    try {
        const token = socket.handshake.headers?.auth;
    const decoded = jwt.verify(token, "mubasshir");
    // console.log({decoded});
    socket.user = decoded;
    } catch(e){
        const socketError = new Error("NOT_AUTHORIZED");
        return next(socketError);
    }
    next();
})

//all connection user under online-users event get message when new user is online
const emitOnLineUsers = () =>{
    const onlineUsers = server_library.getOnlineUsers();
    io.emit("online-users",{onlineUsers})
    
}

io.on('connection', (socket)=>{
    console.log('New connection : ',socket.id);
    // console.log({socket});
    newConnectionHandler(socket,io);

    //emit online user
    emitOnLineUsers();

    // direct message 

    socket.on('on_message',async (data)=>{
        console.log({data});
        await directMessageHandler(socket,data)
    })
    
})