const { request } = require("express");
let express = require("express");
let router = express.Router();
let middleware = require("../../middleware/index.middleware");
let userController = require("../../controller/userController");
//get router
router.get("/", middleware.checkLoginSession, userController.userHomeView);
router.get("/add-new-student", userController.getAddNewStudent);

//post router
router.post("/add-new-student", userController.postAddNewStudent);

// module exports
module.exports = router;
