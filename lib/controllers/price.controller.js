const response = require('../res/res');
const db = require('../models/init');
const Price = db.price;

var multer  = require('multer'); 
var noupload = multer();

exports.getPriceList = async function(req, res) {
    try {
        const getPrice = await Price.findAll();
        response.ok(getPrice, res);
    } catch (error) {
        response.internalServerError(error.message, res);
    }
}

exports.createPrice = [
    noupload.none(),
    async function(req, res) {
        try {
            var price = req.body.price;
            var weekday = req.body.weekday;
            var data = {
                price: price,
                weekday: weekday
            };
            const create = await Price.create(data);
            response.postOk(create, "Price has been created", res);
        } catch (error) {
            response.internalServerError(error.message, res);
        }
    }
]