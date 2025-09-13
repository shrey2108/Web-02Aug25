

function add(a, b, ...c) { //rest
  const sum = c.reduce((acc, num) => acc + num);
  console.log(a + b + sum);  
}

// [10, 20, 30, 40, 50] = rest
// 10, 20, 30, 40, 50 = spread
const data = [10, 20, 30, 40, 50];
add(...data); // spread
