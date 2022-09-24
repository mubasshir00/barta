const mongoose = require('../config/mongo');
const User_Model = require('../models/User');
const get_user_details = async (query_data) =>{
    const user = await User_Model.findOne(query_data);
    return user ;
}
module.exports = {
    get_user_details:get_user_details
}