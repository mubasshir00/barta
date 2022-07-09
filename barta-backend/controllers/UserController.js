const validation_schema = require("../helpers/validation_schema");
const { User } = require("../model/user");

const user = async (req,res) =>{
    try {
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
              password: req.body.password,
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
module.exports = {
  userRegistration: userRegistration,
  user: user,
};