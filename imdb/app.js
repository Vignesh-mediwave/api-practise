const movies = require("./movie");
//add new movie
// const movieadd = { id: 104, name: "Vikings", genre: "war" };
// movies.push(movieadd);

// //find specfic movie
// const id = 100;
// const movieToFind = movies.find(function (m) {
//   return m.id == id;
// });
// if (!movieToFind) {
//   console.log(`movie with ${id} not found`);
// } else {
//   console.log("movie found", movieToFind);
// }

// //console.log(movies);

// //updatemovie

// const updateId = 101;
// const mName = "the-last-kingdom";

// const updateName = movies.findIndex((m) => m.id === updateId);
// if (updateName == -1) {
//   console.log(`id ${updateId} not found`);
// } else {
//   movies[updateName]["name"] = mName;
// }
// console.log(movies);

//delete

const deleteId = 100;
const deleteMovie = movies.findIndex((m) => m.id === deleteId);
movies.splice(deleteMovie, 1);
console.log(movies);
