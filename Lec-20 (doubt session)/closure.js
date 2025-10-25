
function a(){
  var val_1 = 10;

  function b(){
    var val_2 = val_1*val_1;
    console.log("hello from b fun", val_2);
  }

  return b;
}

const c = a(); // defination of fun b

c();




