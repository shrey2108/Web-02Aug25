

const user = {
  firstname: "Manish",
  lastname: "Arora",
  age: 28,
  isMarried: false,

  sayHello: function() {
    return `Hello from ${this.firstname}`
  }
}

console.log(user.sayHello())


console.log(user);
const jsonData = JSON.stringify(user);


console.log(jsonData);

console.log(JSON.parse(jsonData))