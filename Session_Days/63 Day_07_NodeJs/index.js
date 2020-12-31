var http = require("http");
var sample = require("./sampleModule");
http
  .createServer(function (req, res) {
    res.write("Nikhil");
    res.end();
  })
  .listen(3000, function () {
    console.log("Project is running on " + 3000);
  });
