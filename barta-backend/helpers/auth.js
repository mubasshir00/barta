const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req,res,next) =>{
  let token = req.body.token || req.query.token || req.headers['authorization'];
  if(!token){
    return res.status(403).json({
      status:false,
      status_message:'A token is required'
    })
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded;
  } catch(err){
    return res.status(401).json({
      status:false,
      status_message:'Invalid Token'
    })
  }
  return next();
}
module.exports = verifyToken ;