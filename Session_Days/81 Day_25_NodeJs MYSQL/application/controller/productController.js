var productModel = require("../model/productModel");

let productController = {
  addNewProduct: function (req, res) {
    let reqData = req.body;
    productModel
      .saveNewProduct(res.pool, reqData)
      .then(function (result) {
        // res.status(200).send({ call: 1, data: result });
        res.redirect("/product/list");
      })
      .catch(function (error) {
        res.status(500).send({ call: 0, data: error });
      });
  },
  productListView: function (req, res) {
    productModel
      .getProductList(res.pool)
      .then(function (result) {
        res.render("product_list", {
          prod_list: result,
        });
        //res.status(200).send(result);
      })
      .catch(function (error) {
        res.status(500).send({ call: 0, data: error });
      });
  },
  getUpdateView: function (req, res) {
    var data = req.query;
    productModel
      .getSingleProductDetails(res.pool, data.id)
      .then(function (result) {
        res.render("product_update", {
          update_pro: result[0],
        });
        // res.send(result[0]);
      })
      .catch(function (error) {
        res.status(500).send({ call: 0, data: error });
      });
  },
};
module.exports = productController;
