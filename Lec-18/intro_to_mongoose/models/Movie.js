
const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: String,
  rating: Number,
  year: Number,
  director: String
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;