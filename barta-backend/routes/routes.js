const express = require('express');
const router = express.Router();
const UserController = require("./../controllers/UserController");
const auth = require('./../helpers/auth')
router.post("/register",UserController.userRegistration);
router.get("/user",auth,UserController.user);
router.post("/login",UserController.userLogin);

router.get("/test",auth,(req,res)=>{
    res.send('request passed');
})

module.exports = router;