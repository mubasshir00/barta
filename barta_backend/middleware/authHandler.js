const authenticateJWT = async function (req,res,next){
    
    let url = req.url;
    console.log(url);
}

module.exports = { authenticateJWT: authenticateJWT };