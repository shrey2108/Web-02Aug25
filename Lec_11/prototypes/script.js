function Person(name, age, address, marks) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.marks = marks;

  // this.totalMarks = function () {
  //   return this.marks.reduce((acc, num) => acc + num);
  // };
}

Person.prototype.totalMarks = function () {
  return this.marks.reduce((acc, num) => acc + num);
};

const p1 = new Person("Mohit", 40, "Delhi, Ind", [40, 50, 50]);
console.log(p1);
// console.log(p1.totalMarks());

// Number
// Object
