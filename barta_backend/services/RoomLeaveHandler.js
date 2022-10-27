const roomLeaveHandler = (socket,data) =>{
    try {
      console.log({data});
      console.log({socket});
    } catch(e){
        console.log({e});
    }
}
module.exports ={
    roomLeaveHandler:roomLeaveHandler
}