// explicit binding
// call, bind, apply

const person1 = {
  name: "Anurag",
  age: 30,
  address: "Noida, India"
}

const person2 = {
  name: "Manish",
  age: 20,
  address: "Delhi, India"
}

function updateAge(person, age){
  person.age = age;
}

updateAge(person1, 60);
updateAge(person2, 35);

console.log(person1);
console.log(person2);

//  ------------------------------------------
function updateAgeNew(age){
  this.age = age;
}

function updatePerson(age, address){
  this.age = age;
  this.address = address;
}

// updateAgeNew.apply(person1, [50]);
updateAgeNew.call(person1, 50);
console.log(person1);

updatePerson.apply(person1, [100, "Karol Bagh, Delhi, Ind"]);
updatePerson.call(person1, 500, "Banglore, India")
console.log(person1)

const fn = updatePerson.bind(person2);

// fn = function(age, address){
//   person2.age = age;
//   person2.address = address;
// }
fn(18, "Pune, India");
console.log(person2)