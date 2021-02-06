let express = require("express");
let middleware = require("../../middleware/index.middleware");
let productController = require("../../controller/productController");
let router = express.Router();

router.post(
  "/save-data",
  middleware.checkDbConnection,
  productController.addNewProduct
);
module.exports = router;
