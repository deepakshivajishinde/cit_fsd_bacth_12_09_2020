var mysql = require("mysql2");
var myConnection = require("express-myconnection");
var dbOptions = {
  host: "127.0.0.1", //localhost
  user: "root",
  password: "",
  port: 3306,
  database: "nodejs_products",
};

module.exports = {
  mysql: mysql,
  myConnection: myConnection,
  dbOptions: dbOptions,
};
