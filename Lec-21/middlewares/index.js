const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// express => series of middlewares\

function logging(req, res, next) {
  console.log("hello");
  next();
}

// app.use(logging);
app.use("/products", logging);

app.get('/', (req, res) => {
  res.send('Working fine');
});


// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});