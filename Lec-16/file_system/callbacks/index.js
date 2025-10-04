const fs = require("fs");
const path = require("path");

const data = "some data here..."

const filePath = path.join(__dirname, "data.txt");

// fs.writeFile(filePath, data, () => {
//   console.log("Success!")
// })

fs.readFile(filePath, "utf-8", (err, data) => {
  if(err) {
    console.log("Something went wrong!")
    return;
  }
  console.log(data);
})