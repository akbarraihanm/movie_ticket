module.exports = app => {
    const movieController = require('../controllers/movie.controller');
    var router = require('express').Router();

    app.use('/api/movies', router);

    //POST
    router.post('/', movieController.createMovie);

    //GET
    router.get('/', movieController.getAllMovies);
}