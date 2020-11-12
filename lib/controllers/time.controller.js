const response = require('../res/res');
const db = require('../models/init');
const Time = db.time;

var multer  = require('multer');
var noUpload = multer();

exports.getAllTime = async function(req, res) {
    try {
        const getTimes = await Time.findAll();
        response.ok(getTimes, res);
    } catch (error) {
        response.internalServerError(error.message, res);
    }
}

exports.createTime = [
    noUpload.none(),
    async function(req, res) {
        try {
            var time = req.body.time;
            var data = { time: time };

            const create = await Time.create(data);
            response.postOk(create, "Time has been created", res);
        } catch (error) {
            response.internalServerError(error.message, res);
        }
    }
]