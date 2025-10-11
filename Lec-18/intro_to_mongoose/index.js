require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose"); // ODM
const Movie = require("./models/Movie");

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working fine!");
})

app.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
})

app.post("/movies", async (req, res) => {
  const {title, genre, rating, year, director} = req.body;
  // const movie = new Movie({title, genre, rating, year, director});
  // await movie.save();
  const movie = await Movie.create({title, genre, rating, year, director});
  res.json(movie);
})

app.listen(5000, () => {
  console.log("Server is up at port", 5000);
})