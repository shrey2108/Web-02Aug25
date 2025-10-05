const express = require("express");
const path = require("path");
const app = express();
const PORT = 5001;

// middleware
// to parse body data => req.body = {}
// app.use(express.urlencoded()) // form-data
app.use(express.json()); // json-data

// endpoint/path/route
// controller function
app.get("/", (req, res) => {
  res.send("hello there!");
})

app.get("/home", (req, res) => {
  res.send("HOME PAGE")
})

app.get("/about", (req, res) => {
  res.send("ABOUT PAGE")
})

app.get("/login", (req, res) => {
  // res.send("<h1>LOGIN PAGE</h1>")
  const filePath = path.join(__dirname, "login.html");
  res.sendFile(filePath);
})

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("Req processed successfully!")
})

// :name => path perameter
app.get("/users/:name", (req, res) => {
  console.log(req.params); // {name: ""}
  res.send("success");
})

app.get("/todos", (req, res) => {
  console.log(req.query);
  res.send("success");
})

app.listen(PORT, () => {
  console.log("server is up at port", PORT);
})


// http://localhost:5000
// https://google.com

/**
 * 
 *  app.get("/products/1", ()=> {})
 *  app.get("/products/2", ()=> {})
 *  app.get("/products/3", ()=> {})
 *  app.get("/products/4", ()=> {})
 * 
 * dynamic routes
 *  app.get("/products/:id", () => {
 * 
 *  })
 * 
 */