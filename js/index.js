"use strict";
const sunSequence = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const student = {
  name: "Ivan",
  lastName: "Ivanov",
  isMail: true,
  contacts: {
    tel: "0000000000",
    email: "1212@gmail.com",
  },
};
const university = {
  faculti: "Programming",
  department: "JS",
};

const studentData = `${student.name} ${student.lastName} student faculty ${university.faculti} ${university.department}`;
const studentInfo = function (student, university) {
  const { name, lastName, isMail } = student;
  const { tel, email } = student.contacts;
  const { faculti, department } = university;
  console.log(student, university);
};
const studentsInfo = function (student, university) {
  for (const students in student) {
    console.log(` ${students} - ${student[students]} `);
  }
};

const arr = new Array(25).fill(null).map((_, i) => i + 1);

function evenIndext(array) {
  if (array.length > 0) {
    for (let i = 0; i <= array.length; i++) {}
  }
}
