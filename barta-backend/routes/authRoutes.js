const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

const authController = require("./../controllers/authController");

router.post("/register",authController.userRegistration);

router.post("/login",authController.userLogin);

router.get("/test",verifyToken,(req,res)=>{
    res.send("HELLO")
})

module.exports = router