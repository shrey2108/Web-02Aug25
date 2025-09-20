// Math.random()
// Math.ceil(2.348739) => 3
// Math.floor(3.342987) => 3


const p = new Promise((resolve, reject)=>{
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber > 5) {
      resolve();
    } else {
      reject(randomNumber);
    }
  }, 4000);
});


p.then(()=>{
  console.log("Number greater than 5");
}).catch((num) => {
  console.log("Number <= 5", num)
})
