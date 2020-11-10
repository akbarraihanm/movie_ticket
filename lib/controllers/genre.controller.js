const response = require('../res/res');
const db = require('../models/init');
const Genre = db.genre;

var multer  = require('multer'); 
var noupload = multer();

exports.createGenre = [
    noupload.none(),
    async function(req, res) {
        var genre = req.body.genre;
        try {
            var data = { genre: genre };
            const createGenre = await Genre.create(data);
            response.postOk(createGenre, "Genre has been created", res);
        } catch (error) {
            response.internalServerError(error.message, res);
        }
    }
]

exports.getAllGenres = async function(req, res) {
    try {
        const getGenres = await Genre.findAll();
        response.ok(getGenres, res);
    } catch (error) {
        response.internalServerError(error.message, res);
    }
}