const fs = require("fs/promises");
const path = require("path");
const filePath = path.join(__dirname, "data.txt");

// fs.readFile(filePath, "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(err => console.log(err))

async function getData() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getData();