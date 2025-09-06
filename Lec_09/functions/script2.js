// functions can be treated as datatype

function add(a, b){
  return a + b;
}

var add = function(a, b){
  return a + b;
}

// console.log(add);
// console.log(add(2,5));

function temp1(a) {
  return 2*a;
}

function temp2(a) {
  return a(5);
}

var x = temp2(temp1)
console.log(x);

// HOF => High order function
// CB => callback funtion







