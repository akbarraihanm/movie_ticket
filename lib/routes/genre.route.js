module.exports = app => {
    const genreController = require('../controllers/genre.controller');    
    var router = require('express').Router();

    app.use('/api/genres', router);

    //POST
    router.post('/', genreController.createGenre);

    //GET
    router.get('/', genreController.getAllGenres);
}