//system modules
var http = require("http");
var fs = require("fs");
//read file
//write
//create
//update
//delete
http
  .createServer(function (request, response) {
    /* fs.readFile("./public/index.html", function (error, data) {
      if (error) throw error;
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      response.write(data);
      return response.end();
    });*/
    var text = "Hello node Javascript";
    /*fs.writeFile("./public/home.html", text, function (error) {
      if (error) throw error;
      console.log("file writhen successfully");
      return response.end();
    });*/
    /*   fs.appendFile("./public/home.html", text, function (error) {
      if (error) throw error;
      console.log("file writhen successfully");
    });*/
    fs.unlink("./public/home.html", function (error) {
      if (error) throw error;
      console.log("file removed successfully");
    });
    response.end();
  })
  .listen(3000, function () {
    console.log("port 3000");
  });
