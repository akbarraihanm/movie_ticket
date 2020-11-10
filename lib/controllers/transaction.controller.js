const response = require('../res/res');
const db = require('../models/init');
const Movie = db.movie;
const Price = db.price;
const Transaction = db.transaction;

var multer  = require('multer');
var noUpload = multer();

exports.getAllTransactions = async function(req, res) {
    try {
        const getTransactions = await Transaction.findAll({
            include: [
                {
                    model: Movie,
                    as: "movie",
                    include: [
                        {
                            model: db.genre,
                            as: "genre"
                        },
                        {
                            model: db.movieStatus,
                            as: "movieStatus"
                        }
                    ]
                }                
            ]
        });
        response.ok(getTransactions, res);
    } catch (error) {
        response.internalServerError(error.message, res);
    }
}

exports.createTransaction = [
    noUpload.none(),
    async function(req, res) {
        try {
            var bookingName = req.body.bookingName;
            var phoneNumber = req.body.phoneNumber;
            var countTicket = req.body.countTicket;
            var bookDate = req.body.bookDate;
            var totalPrice = req.body.totalPrice;
            var movieId = req.body.movieId;
            var priceId = req.body.priceId;

            var data = {
                bookingName: bookingName,
                phoneNumber: phoneNumber,
                countTicket: countTicket,
                bookDate: bookDate,
                totalPrice: totalPrice,
                movieId: movieId,
                priceId: priceId
            };

            const create = await Transaction.create(data);
            response.postOk(create, "Ticket successfully booked!", res);
        } catch (error) {
            response.internalServerError(error.message, res);
        }
    }
]