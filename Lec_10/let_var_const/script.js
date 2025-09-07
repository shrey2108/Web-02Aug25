// let var const
// JS ES6 (ecmascript 6)


// ---------------------- re-initialization
/*
var a = 10;
a = 20;

let b = 10;
b = 20;

const c = 10;
c = 20;

console.log("var", a)
console.log("let", b)
// console.log("const", c); // error

*/
// ---------------------- re-declaration

// var a = 10;
// var a = 20;

// let b = 10;
// let b = 20;

// const c = 10;
// const c = 20;

// console.log(a)
// console.log(b)
// console.log(c)

// ---------------------- scope

function temp(){
  {
    var a = 10;
    let b = 10;
    const c = 10;

    console.log(b) // accessable
    console.log(c) //accessable
  }

  // console.log(a)
  // console.log(b) // error
  // console.log(c) // error
}

// temp();

function temp2() {
  var a = 10;
  console.log(a);
  console.log(b);

  var b = 20;
  let c = 30;
  console.log(c)

  // console.log(d);
  let d = 40;
}

temp2();

const sq = {
  height: 20,
  width: 40,
}

// console.log(sq)
sq.height = 200;
console.log(sq)

// sq = {
//   height: 200,
//   width: 40
// }; // error

let obj1 = {a:10, b:20};
let obj2 = obj1;

obj2.a = 1000;
console.log(obj1);
console.log(obj2);



