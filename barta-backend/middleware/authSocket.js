const jwt = require('jsonwebtoken');

const config = process.env;

const verifyTokenSocket = (socket,next) =>{
    const token = socket.handshake.auth?.token;

    try {
        const decoded = jwt.verify(token, config.secret);
        socket.user = decoded;
    } catch(e){
        console.log(e);
        const scoketError =  new Error('SOmething wrong')
        return next(scoketError);
    }
    next();
}

module.exports = verifyTokenSocket;