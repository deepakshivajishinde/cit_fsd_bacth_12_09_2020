let express = require("express");
let middleware = require("../../middleware/index.middleware");
let productController = require("../../controller/productController");
let router = express.Router();

router.get(
  "/",
  middleware.checkDbConnection,
  productController.productListView
);

router.get(
  "/list",
  middleware.checkDbConnection,
  productController.productListView
);
router.get(
  "/update",
  middleware.checkDbConnection,
  productController.getUpdateView
);
router.post(
  "/save-data",
  middleware.checkDbConnection,
  productController.addNewProduct
);
module.exports = router;
