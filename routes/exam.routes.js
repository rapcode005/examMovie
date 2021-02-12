module.exports = app => {
  const exam = require("../controllers/exam.controller.js");
  var router = require("express").Router();

  router.get("/", exam.topMovies);
  router.get("/genre", exam.getAllGenre);
  router.get("/title", exam.searchMovie);
  router.get("/genre/search", exam.searchGenre);
  app.use('/api/movies', router);
};