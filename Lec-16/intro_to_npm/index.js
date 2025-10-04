// npm => node package manager

const colors = require("colors");
const figlet = require("figlet");

console.log("hi there!!".rainbow)

figlet("javascript", (err, data) => {
  if(err) return;

  console.log(data.red);
})



