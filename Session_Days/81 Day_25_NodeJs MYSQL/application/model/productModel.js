module.exports = {
  saveNewProduct: function (pool, data) {
    return new Promise(function (resolve, reject) {
      var date = new Date();
      date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      let query = `INSERT INTO np_product_list
                        (
                            pl_name,
                            pl_brand,
                            pl_price,
                            created_date   
                        ) VALUES (?)`;
      var insertData = [
        data.productName,
        data.brandName,
        data.productPrice,
        date,
      ];

      pool.query(query, [insertData], function (error, result) {
        if (error) reject(error);
        else resolve(result);
      });
    });
  },
  getProductList: function (pool) {
    return new Promise(function (resolve, reject) {
      var query = `SELECT * FROM np_product_list`;
      pool.query(query, function (error, result) {
        if (error) reject(error);
        else resolve(result);
      });
    });
  },
  getSingleProductDetails: function (pool, id) {
    return new Promise(function (resolve, reject) {
      var query = `SELECT * FROM np_product_list WHERE id = ?`;
      pool.query(query, [Number(id)], function (error, result) {
        if (error) reject(error);
        else resolve(result);
      });
    });
  },
};
