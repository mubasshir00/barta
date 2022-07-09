const express = require('express');
const router = express.Router();

const UserController = require("./../controllers/UserController")

router.post("/register",UserController.userRegistration);
router.get("/user",UserController.user);
router.post("/login",UserController.userLogin);

module.exports = router;