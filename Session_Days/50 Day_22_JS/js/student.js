// constructor function
function StudentDetails(studentInfo) {
  this.studentBasicInfo = [];
  this.addNewStudent = function (newStudent, callback) {
    this.studentBasicInfo.push(newStudent);
    callback(true);
  };
  this.removeStudent = function () {};
  this.printStudent = function (callback) {
    var list = this.studentBasicInfo.map(function (value) {
      return `<li>${value.name}</li>`;
    });
    callback(list.join(""));
  };
}
