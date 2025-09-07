const numbers = [1, 2, 3, 4, 5];

const newNums = numbers.map(function(newNums){
  console.log(newNums);
  return newNums * 10;
})

console.log(newNums)

const a = 10;

function add(a, b) {
  const c = a + b;
  return c;
}

add(20, 30)