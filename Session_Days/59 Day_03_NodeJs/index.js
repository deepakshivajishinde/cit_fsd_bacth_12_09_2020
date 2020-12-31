//system modules
var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (request, response) {
    var url_token = url.parse(request.url, true);
    console.log(url_token.pathname);
    if (url_token.pathname == "/") url_token.pathname = "/index.html";

    var fileName = url_token.pathname.substr(
      url_token.pathname.lastIndexOf("/") + 1
    );
    var filePath = "./public/" + fileName;
    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.writeHead(404, {
          "Content-Type": "text/html",
        });
        response.write("File Not Found");
        return response.end();
      } else {
        response.writeHead(200, {
          "Content-Type": "text/html",
        });
        response.write(data);
        return response.end();
      }
    });
  })
  .listen(3000, function () {
    console.log("port 3000");
  });
