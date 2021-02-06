var middleware = {
  checkDbConnection: function (req, res, next) {
    req.getConnection(function (error, connection) {
      if (error) {
        res.send({ call: 0, data: error });
      } else {
        res.pool = connection;
        next();
      }
    });
  },
};
module.exports = middleware;
