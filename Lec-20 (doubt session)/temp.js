// closure is an object that is bundled together with returned function that contains all the used variable of lexical environment

// whenever a function is returned all the variables lies in lexical environment of returned fun also gets returned in an object called closure

function a(){
  var a=5;

  function b(){
    var a = a + 1
    console.log("Hello", a);
  }

  return b;

}

const c=a();
c();