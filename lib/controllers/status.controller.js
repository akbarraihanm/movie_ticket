const response = require('../res/res');
const db = require('../models/init');
const Status = db.movieStatus;

var multer  = require('multer'); 
var noupload = multer();

exports.getAllStatus = async function(req, res) {
    try {
        const getStatus = await Status.findAll();
        response.ok(getStatus, res);
    } catch (error) {
        response.internalServerError(error.message, res);
    }
}

exports.createStatus = [
    noupload.none(),
    async function(req, res) {
        try {
            var status = req.body.status;
            var data = { status: status };
            const createStatus = await Status.create(data);
            response.postOk(createStatus, "Movie status has been created", res);
        } catch (error) {
            response.internalServerError(error.message, res);
        }
    }
]