// path parameter (req.params), query parameter (req.query), body (req.body)

const express = require("express");
const app = express();
const PORT = 5000;

const products = require("./products");

// middleware to parse body data
app.use(express.json());

// get bulk products
app.get("/products", (req, res) => {
  // res.send(products);
  res.json(products);
});

// get single product
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id == id);
  res.json(product);
})

// create new product
app.post("/products", (req, res) => {
  const { name, category, brand, price, rating } = req.body;
  const id = products.length + 1;
  products.push({ id, name, category, brand, price, rating });
  res.json({id, name, category, brand, price, rating});
});

// delete product
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex(p => p.id == id);

  if(index != -1) {
    products.splice(index, 1);
    return res.json(id);
  }

  res.json("product not found");
})

app.put("/products/:id", (req, res) => {
  const {name, category, price, brand} = req.body;
  const id = req.params.id;

  const product = products.find(p => p.id == id);

  if(!product) {
    return res.json("Product not found!");
  }

  if(name) product.name = name;
  if(category) product.category = category;
  if(price) product.price = price;
  if(brand) product.brand = brand;

  res.json(product);

})

app.listen(PORT, () => {
  console.log("Server is up at port", PORT);
});


// restful routing, 
// database (sql, no sql) queries, 
// ORM/ODM (mongoose and prisma),
// authentication,
// websockets
// chat application
// CRUD application

// React
// full stack
// TS
// TS backend