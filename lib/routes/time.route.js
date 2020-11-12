module.exports = app => {
    const timeController = require('../controllers/time.controller');
    var router = require('express').Router();

    app.use('/api/times', router);

    //GET
    router.get('/', timeController.getAllTime);

    //POST
    router.post('/', timeController.createTime);
}