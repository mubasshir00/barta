const socket = require('socket.io');
const express = require('express');
const app = express();

const http = require('http');
const { newConnectionHandler } = require('../socketServices/newConnectionService');
const authSocket = require('../middleware/authSocket');
const server_library = require('./../library/socket_library');
const jwt = require("jsonwebtoken");
const { directMessageHandler } = require('../socketServices/directMessageHandler');
const { get_user_details } = require('./ReusableQuery');
const { ChatHistoryHandler } = require('../socketServices/chatHistoryService');
const { setSocketServerInstance, roomCreateHandler } = require('./../library/socket_library');
const { roomJoinHandler } = require('../services/RoomJoinHandler');

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

setSocketServerInstance(io);

io.use(async (socket ,next)=>{
    try {
    const token = socket.handshake.headers?.auth;
    const decoded = jwt.verify(token, "mubasshir");
    const user_info = await get_user_details({ userid: decoded.userid });
    decoded.user_id_db = user_info._id;
    socket.user = decoded;

    // console.log({user_info});
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

    // direct message one to one

//     {
//     "receiver_id" : "4J3VE39AM",
//     "content" : "AAA"
// }
    socket.on('on_message',async (data)=>{
        console.log({data});
        await directMessageHandler(socket,data)
    })

    // chat history
    // {
    //     receiver_user_id : "N5HSKFAB8";
    // }
    socket.on("direct-chat-history",(data)=>{
        ChatHistoryHandler(socket,data);
    })
    
    //create new active room
    socket.on("room-create",()=>{
        roomCreateHandler(socket)
    })

//     {
//     "roomId" : "ebb61d46-59d2-4841-ad86-8c13375a6ab7"
// }
    socket.on('room-join',(data)=>{
        roomJoinHandler(socket,data);
    })
})