
console.log(1);

delay(3); // blocking nature

console.log(2);

console.log(3)
console.log(4)

function delay(n){
  const currTime = new Date().getTime();

  while(new Date().getTime() < currTime + n*1000) {}
}