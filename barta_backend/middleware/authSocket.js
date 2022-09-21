const jwt = require('jsonwebtoken');

const verifyTokenSocket = (socket,next) =>{
    const token = socket.handshake.headers?.auth;
    try {
        const decoded = jwt.verify(token,"mubasshir");
        socket.user = decoded;
    } catch(e){
        console.log(e);
         const socketError = new Error("NOT_AUTHORIZED");
         return next(socketError);
    }
    next ();
}

module.exports = {
    verifyTokenSocket:verifyTokenSocket
}