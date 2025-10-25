

// function debounce(fn, delay) {
//   let id = 1000;

//   return function(...args){
//     clearTimeout(id);
//     id = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay)
//   }
// }


let timer;
const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  // console.log(e.target.value)
    clearTimeout(timer);
    timer = setTimeout(() => console.log(e.target.value), 1000);
});



// abc(apicall)def(apicall)
// abc(apicall)d(apicall)e(apicall)f(apicall)(apicall)(apicall)

// abc
// abcd
// abcde
// abcdef
