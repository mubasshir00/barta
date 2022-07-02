const express = require('express');
const router = express.Router();

const UserController = require("./../controllers/UserController")

router.get("/user",UserController.test);

module.exports = router;