const Joi = require("joi");
const { registerSchema, loginSchema } = require("../helper/validation");
const user = require("../models/user");
const bcrypt = require("bcrypt");

const userLogin =async (req,res)=>{
    try {
        const result = await loginSchema.validate(req.body);
        if (result.error) {
          return res.status(400).json({
            status: false,
            status_message: result.error.details[0].message,
          });
        }

        const {email,password} = {...req.body};

        const user_details = await user.findOne({
          email: email.toLowerCase(),
        });
      
        if (
          user_details &&
          (await bcrypt.compare(password, user_details.password))
        ) {
          console.log({ user_details });
          return res.status(200).json({
            status: true,
            status_message: "Login Success",
            email: user_details.email,
            username: user_details.username,
          });
        } 

        return res.status(400).json({
            status: false,
            status_message: "something went wrong",
          });
        
    } catch(e){
        console.log();
    }
}
const userRegistration = async (req,res) =>{
    try{
        const result = registerSchema.validate(req.body);
        if(result.error){
            return res.status(400).json({
              status: false,
              status_message: result.error.details[0].message,
            });
        }
        const {email,password,username,profilePic} = { ...req.body};
        const userExist = await user.findOne({
          email: email.toLowerCase(),
        });
        console.log(userExist);
        if(userExist) {
            return res.status(400).json({
              status: false,
              status_message: 'email already exists',
            });
        }
        const encrypted_password = await bcrypt.hash(password,10);
        const newUser = await user.create({
          email: email,
          password: encrypted_password,
          username: username ? username : "no_name",
          profilePic: profilePic ? "" : profilePic,
        });
        return res.status(200).json({
          status: true,
          status_message: "registration success",
          email: newUser.email,
          username: newUser.username,
          password:newUser.password,
          profilePic:newUser.profilePic
        });
    } catch(e){
        console.log(e);
    }
}

module.exports = {
    userLogin:userLogin,
    userRegistration:userRegistration
}