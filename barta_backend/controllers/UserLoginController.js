const Joi = require("joi");
const User_Model = require("../models/User");
const UserLoginService = require("../services/UserLoginService");

const userLogin = async  (req,res)=>{
    try {
      const {
        auth_id,
        auth_type,
        country,
        device_id,
        device_token,
        device_type,
        email,
        first_name,
        last_name,
        profile_pic,
        state,
        username,
      } = req.body;

      const schema = Joi.object({
        auth_id: Joi.string().required(),
        auth_type: Joi.string().required(),
        country: Joi.string().allow(""),
        email: Joi.string(),
        device_id: Joi.string(),
        device_token: Joi.string().allow(""),
        device_type: Joi.string().allow(""),
        first_name: Joi.string().allow(""),
        last_name: Joi.string().allow(""),
        profile_pic: Joi.string().allow(""),
        state: Joi.string().allow(""),
        username: Joi.string().allow(""),
        deviceId: Joi.string().allow(""),
      });
      const {error,value} = schema.validate(req.body);

      if(error){
        return res.status(400).json({
          'status' : false,
          'status_message' : error.details[0].message
        })
      }
      let password =  req.body.password ? "" : req.body.password ;
      let  phone =  req.body.phone ? "" : req.body.phone;
      let gender = req.body.gender ? "" : req.body.gender;
      let date_of_birth= req.body.date_of_birth ? "" : req.body.date_of_birth ;
      const user = await UserLoginService.userCreateNewUser(
        auth_id,
        auth_type,
        country,
        device_id,
        device_token,
        device_type,
        email,
        first_name,
        last_name,
        profile_pic,
        state,
        username,
        password,
        phone,
        gender,
        date_of_birth
      );

      const token = await UserLoginService.generateToken(
        user.data.userid,
        user.data.email,
        user.data.auth_id
      );

      console.log(token);

      return res.status(200).json({
        "status" : true,
        "status_message" : "Login Success",
        "new_user" : user.new_user,
        "details" :  user.data,
        "token" : token
      })
      
      
    } catch(e){
        console.log("error",e);
        
    }
}


module.exports = { userLogin: userLogin };