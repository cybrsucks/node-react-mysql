const express = require("express");
const router = express.Router();
const User = require('../model/userModel.js')
const userController = require("../controllers/userController");
// const auth = require("../auth");

router.post("/user/create", userController.user_creation); //working
router.get("/getUsers", userController.user_All); //working
router.post("/", userController.login); // working
router.post("/login", userController.login); // working
router.get("/dashboard", userController.dashboard); // working
router.get("/logout", userController.logout); // working
router.get("/user/manage"); // working
router.get("/userDetails", userController.user_details); // working
router.post("/user/updateEmail", userController.update_email); // working
router.post("/changePassword", userController.change_password); // working

router.get("/user/displayStatus", userController.user_statusList); // working
router.post("/user/updateStatus", userController.user_status); // working
module.exports = router;