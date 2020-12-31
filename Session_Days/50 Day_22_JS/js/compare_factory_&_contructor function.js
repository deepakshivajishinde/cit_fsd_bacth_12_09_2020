// factory function
function studentDetails(studentInfo) {
  return {
    studentBasicInfo: studentInfo,
    addNewStudent: function () {
      console.log(this.studentBasicInfo);
    },
  };
}
var studentOne = studentDetails({
  name: "Deepak",
});
console.log(typeof studentOne);
studentOne.addNewStudent();

// constructor function
function StudentDetails(studentInfo) {
  this.studentBasicInfo = studentInfo;
  this.addNewStudent = function () {
    console.log("Hello");
  };
  //window == this
}

var studentTwo = new StudentDetails({
  name: "Nikhil",
});

studentTwo.addNewStudent();
