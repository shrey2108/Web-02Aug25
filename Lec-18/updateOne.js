db.movies.updateOne(
  {_id: ObjectId('68ea3fd4c5dd166d45f2c42b')},  // single, multiple
  {$set: { genre: 'Science-Fiction', year: 2020 }}
);

db.movies.updateMany(
  {genre: "Sci-Fi"},
  {$set: { year: 2020 }}
);

db.movies.find({genre: "Sci-Fi"})

// {
//   _id: ObjectId('68ea4a0fc5dd166d45f2c432'),
//   title: 'Inception',
//   year: 2010,
//   genre: ['Sci-Fi', 'action'],
//   director: 'Christopher Nolan',
//   rating: 8.8
// }


// db.movies.deleteOne({rating: 9})
// deleteMany({})


// upsert() update -> add


db.movies.find({year: {$eq: 2020}})
db.movies.find({year: {$lt: 2020}})
db.movies.find({year: {$lte: 2020}})

// $and, $or, $not

db.movies.find({});


// {$and: [filter1, filter2, ...]}
{$and: [{year: {$gte: 2008}}, {year: {$lte: 2010}}]}
