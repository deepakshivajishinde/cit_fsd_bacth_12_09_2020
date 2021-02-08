const { request } = require("express");
let express = require("express");
let router = express.Router();
let middleware = require("../../middleware/index.middleware");
let userController = require("../../controller/userController");
//get router
router.get("/", middleware.checkDbConnection, userController.userHomeView);

//post router

// module exports
module.exports = router;
