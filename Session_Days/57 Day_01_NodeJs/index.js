//system modules
var http = require("http");
http
  .createServer(function (request, response) {
    console.log(response);
    response.write("Nikhil and Tushar");
    response.end();
  })
  .listen(3000);
