const response = require('../res/res');
const db = require('../models/init');
const Movie = db.movie;
const Genre = db.genre;
const Status = db.movieStatus;

var multer  = require('multer');
var noUpload = multer();

exports.createMovie = [
    noUpload.none(),
    async function(req, res) {
        try {
            var movieTitle = req.body.movieTitle;
            var posterPath = req.body.posterPath;
            var backdropPath = req.body.backdropPath;
            var overview = req.body.overview;
            var releasedDate = req.body.releasedDate;
            var movieGenreId = req.body.genreId;
            var movieStatusId = req.body.statusId;
    
            var data = {
                movieTitle: movieTitle,
                posterPath: posterPath,
                backdropPath: backdropPath,
                overview: overview,
                releasedDate: releasedDate,
                movieGenreId: movieGenreId,
                movieStatusId: movieStatusId
            };
    
            const create = await Movie.create(data);
            response.postOk(create, "Movie has been created", res);
        } catch (error) {
            response.internalServerError(error.message, res);
        }
    }
]

exports.getAllMovies = async function(req, res) {
    try {
        const getMovies = await Movie.findAll({
            include: [
                {
                    model: Genre,
                    as: "genre"                
                },
                {
                    model: Status,
                    as: "movieStatus"
                }
            ]
        });
        response.ok(getMovies, res);
    } catch (error) {
        response.internalServerError(error.message, res);
    }
}