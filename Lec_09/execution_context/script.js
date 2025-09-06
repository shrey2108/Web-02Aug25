
// console.log(str);
// var str = "hello";

// a();

// function a() {
//   var temp1 = 1;
//   var temp2 = 2;

//   console.log(temp1);
//   console.log(temp2);
// }

// ---------------------

function a() {
  b();
  var a1 = 20;
  function b() {
    console.log(b1)
    var b1 = 30;
    console.log(a1)
  }
}

a();
var t1 = 10;
console.log(t1);


