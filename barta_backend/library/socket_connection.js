const socket = require('socket.io');
const express = require('express');
const app = express();

const http = require('http');

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
        origin:"*"
    }
});

io.on('connection',(socket)=>{
    console.log('New connection : ',socket.id);
    // console.log({socket});
    socket.on("join_a_room",(data)=>{
       const { userid,room } = data;
    })
})