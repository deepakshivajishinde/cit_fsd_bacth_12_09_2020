const student = new StudentDetails();
var btnAddStudent = document.getElementById("btnAddStudent");
var inputStudentName = document.getElementById("inputStudentName");
var listStudentList = document.getElementById("listStudentList");

btnAddStudent.addEventListener("click", function (event) {
  event.preventDefault();
  var _student = {
    name: inputStudentName.value,
  };
  student.addNewStudent(_student, function (status) {
    if (status) {
      inputStudentName.value = "";
      student.printStudent(function (list) {
        listStudentList.innerHTML = list;
      });
    } else {
      alert("Student Not Added");
    }
  });
});
