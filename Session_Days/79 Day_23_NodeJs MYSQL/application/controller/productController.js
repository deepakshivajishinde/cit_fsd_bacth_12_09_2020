var productModel = require("../model/productModel");

let productController = {
  addNewProduct: function (req, res) {
    let reqData = req.body;
    productModel
      .saveNewProduct(res.pool, reqData)
      .then(function (result) {
        res.status(200).send({ call: 1, data: result });
      })
      .catch(function (error) {
        res.status(500).send({ call: 0, data: error });
      });
  },
};
module.exports = productController;
