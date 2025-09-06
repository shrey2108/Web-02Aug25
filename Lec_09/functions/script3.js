
function temp() {

  console.log("Hello from temp function");
  
  var str = function a() {
    console.log("Hello from a function");
    return "a";
  }

  function b() {
    console.log("Hello from b function")
  }

  return str;
}

var fn = temp();
console.log(fn());