const express = require('express');
const router = express.Router();
const config = require('./../config/test.json');
const UserLoginController = require('./../controllers/UserLoginController');

router.post("/login",UserLoginController.userLogin);

module.exports = router;