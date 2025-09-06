// DRY => Do not repeat yourself

// function defination
function print(val) { // => parameter (val)
  console.log(val);
  // returned value
}

function add(a, b) {
  var c = a + b;
  return c;
}

print(25) // function calling, 25 => argument

// var output = add(10, 20);
// console.log(output)

console.log(add(10, 20));

var output2 = print("Hi there!");
console.log(output2)