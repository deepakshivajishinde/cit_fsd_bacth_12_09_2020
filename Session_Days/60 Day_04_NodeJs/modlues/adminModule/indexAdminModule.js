var vendorModule = require("./manageVendor");
var financeModule = require("./financeModule");
var indexModule = {
  printAdminData: function () {
    console.log(vendorModule.vendorName);
  },
};
module.exports = indexModule;
