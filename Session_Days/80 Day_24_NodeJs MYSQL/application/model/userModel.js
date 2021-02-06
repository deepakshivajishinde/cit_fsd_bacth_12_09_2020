module.exports = {
  getProductInfo: function (pool) {
    return new Promise(function (resolve, rejected) {
      let query = `SELECT 
                    id as id,
                    pl_name as name,
                    DATE_FORMAT(created_date, '%d-%m-%Y') as add_date
                   FROM 
                    np_product_list`;
      pool.query(query, function (error, result) {
        if (error) rejected(error);
        else resolve(result);
      });
    });
  },
};
