
// spread operator (...)
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// -------------------------------
const naam1 = "Aman";
const naam2 = "Abhishek";
const naam3 = "Mohit";
const marks = [20, 50, 30];

const names = [naam1, naam2, naam3, marks];
console.log(names);

// -------------------------------
function add(a, b, c){
  console.log("total: ", a + b + c);
}
// add(marks[0], marks[1], marks[2]);
add(...marks);