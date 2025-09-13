
// new -> constructor function

// function createPerson(name, age, address){
//   const person = {};
//   person.name = name;
//   person.age = age;
//   person.address = address;

//   return person;
// }

// const p1 = createPerson("Rohit", 35, "Noida, India");
// console.log(p1);

// constructor function
function Person(name, age, address){
  this.name = name;
  this.age = age;
  this.address = address;
}

const p2 = new Person("Mohit", 40, "Delhi, Ind");
console.log(p2);


