
// this -> current context

function temp(){
  console.log(this);

  this.fruitName = "Mango";
}

temp();

// implicit binding
obj = {
  a: 1,
  b: true,
  c: function() {
    console.log(this)
  }
}

obj.c();