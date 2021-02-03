var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (request, response) {
  response.render("user/mainIndex", {
    userName: "Nikhil",
    userLastName: "Kadam",
  });
  // response.status(200).send("Hello");
});

module.exports = router;
