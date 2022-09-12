const redis = require("../library/redis_connect");
const User_Model = require("../models/User");
const jwt = require('jsonwebtoken');

const userCreateNewUser = async (
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
) => {

  const check_existing_user = await User_Model.findOne({
    auth_id: auth_id,
  });

  console.log({check_existing_user});

  if(check_existing_user){
    return {
        status : true,
        data:check_existing_user,
        new_user : false
    }
  }

  const new_user = await User_Model.create({
    username: username,
    userid: await GenerateUniqueId(email, username),
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    phone: phone,
    gender: gender,
    date_of_birth: date_of_birth,
    auth_id: auth_id,
    auth_type: auth_type,
    device_id: device_id,
    device_token: device_token,
    device_type: device_type,
    profile_pic: profile_pic,
  });

  await redis.setString(`user_data?user_id_${new_user.userid}`,new_user);

  return {
    status: true,
    data: new_user,
    new_user: true,
  };
};

const GenerateUniqueId = (email, username) => {
  let uni_id = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  const charactersLength = characters.length;
  for (let i = 0; i <= 8; i++) {
    uni_id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  uni_id = uni_id;
  return uni_id;
};

const generateToken = async (userid,email,auth_id) =>{
  try {
    const token = await jwt.sign({
      userid:userid,
      email:email,
      auth_id:auth_id,
    }, "mubasshir"
    ,{
      expiresIn:'6h'
    })
    redis.setJwtToken(`user_token?user_id_${userid}`,token)
    // console.log({token});
    return token;
  } catch(e){
    console.log(e);
  }
}

module.exports = {
  userCreateNewUser: userCreateNewUser,
  generateToken: generateToken,
};