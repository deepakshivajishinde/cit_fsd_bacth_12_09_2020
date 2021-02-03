var middleware = {
  checkLoginSession: function (req, res, next) {
    console.log("Hello");
    next();
  },
};
module.exports = middleware;
