const validation_schema = require("../helpers/validation_schema");
const { User } = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secret;

const user = async (req,res) =>{
    try {
        console.log('Hello');
        console.log(req.body);
        res.send(req.body);

    } catch(e){
        console.log(e);
    }
}
const userRegistration= async (req,res) =>{
    try{
        const validation_result =
          await validation_schema.registrationSchema.validateAsync({
            name: req.body.name,
            emailOrPhone: req.body.emailOrPhone,
            password: req.body.password,
            userName:req.body.userName,
            profilePic: req.body.profilePic,
            address: req.body.address,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country:req.body.country
          });
          if(validation_result){
            let user = new User({
              name: req.body.name,
              emailOrPhone: req.body.emailOrPhone,
              password: bcrypt.hashSync(req.body.password,10),
              profilePic: req.body.profilePic ? req.body.profilePic : "",
              userName: req.body.userName,
              address: req.body.address ? req.body.address : "",
              apartment: req.body.apartment ? req.body.apartment : "",
              zip: req.body.zip ? req.body.zip : "",
              city: req.body.city ? req.body.city : "",
              country: req.body.country ? req.body.country : "",
            });
            user = await user.save();
            if(!user) {
                return res.status(400).json({
                  status: false,
                  status_message: 'User can not be created',
                });
            } else {
                return res.status(200).json({
                    status:true,
                    status_message:user
                });
            }
          }
    } catch(e) {
        console.log(e);
    }
}

const userLogin = async (req,res)=>{
    try {
        const validation_result = await validation_schema.loginSchema.validateAsync({
            emailOrPhone : req.body.emailOrPhone,
            userName:req.body.userName,
            password:req.body.password
        })
        if(validation_result){
           const user = await User.findOne({
            $or:[
                {
                    emailOrPhone:req.body.emailOrPhone,
                },
                {
                    userName:req.body.userName
                }
            ]
           })
           if (!user) {
             return res.status(400).json({
               status: false,
               status_message: "User not found",
             });
           } else if (user && bcrypt.compareSync(req.body.password, user.password)) {
             const token = jwt.sign(
               {
                 user_id: user.id,
                 isAdmin: user.isAdmin,
               },
               "barta",
               {
                 expiresIn: "24h",
               }
             );
             res.status(200).json({
               status: true,
               user: user,
               token: token,
             });
           } else {
             res.status(400).send("Password is wrong");
           }
           console.log(user);
        }
    } catch(e){
        console.log(e);
    }
}
module.exports = {
  userRegistration: userRegistration,
  user: user,
  userLogin: userLogin,
};