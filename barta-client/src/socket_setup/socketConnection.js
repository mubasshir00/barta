import { io } from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) =>{
    const jwtToken = userDetails.token
    socket = io('http://localhost:3015',{
        auth:{
            token:jwtToken
        }
    });

    socket.on('connect',()=>{
        console.log('Successfull connected socket');
        console.log(socket.id);
    })
}