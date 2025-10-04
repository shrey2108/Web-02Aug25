for(let i=0; i<10; i++) {
  console.log(i+1);
}

// window || global

// global.setTimeout(() => {
//   console.log("Hello!!!")
// }, 2000);


const intervalId = setInterval(() => {
  console.log("hi there!!")
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 8000)