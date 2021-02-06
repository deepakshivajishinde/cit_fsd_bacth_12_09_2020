let userModule = require("../model/userModel");

let userController = {
  userHomeView: function (req, res) {
    userModule
      .getProductInfo(res.pool)
      .then(function (result) {
        // true
        //res.status(200).send({ call: 1, data: result });
        res.render("index", {
          product_list: result,
        });
      })
      .catch(function (error) {
        //false
        res.status(500).send({ call: 0, data: error });
      });
  },
};

module.exports = userController;
