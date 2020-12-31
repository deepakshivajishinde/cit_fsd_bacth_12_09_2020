function studentDetails(studentInfo) {
  return {
    studentBasicInfo: studentInfo,
    addNewStudent: function () {
      console.log(this.studentBasicInfo);
    },
  };
}
