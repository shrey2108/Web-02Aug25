function throttle(func, wait) {
  let timeout;
  
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        func();
        timeout = null;
      }, wait);
    }
  };
}
const input = document.querySelector("input");

function printValue() {
  console.log("Hello from print value")
}

const throttledFun = throttle(printValue, 800);

input.addEventListener("keydown", throttledFun);