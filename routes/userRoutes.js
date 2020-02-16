const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/sign-up").post(userController.signUpUser);

router.route("/login").post(userController.loginUser);

router.route("/update-profile/:id").put(userController.updateProfile);

module.exports = router;
