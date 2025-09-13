
console.log(1);

// non blocking nature
window.setTimeout(() => {
  console.log(2);
}, 3000);

setTimeout(() => {
  console.log(3);
}, 1000)

console.log(4);