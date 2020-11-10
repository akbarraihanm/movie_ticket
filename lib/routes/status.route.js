module.exports = app => {
    const statusController = require('../controllers/status.controller');
    var router = require('express').Router();

    app.use('/api/status', router);

    //GET
    router.get('/', statusController.getAllStatus);

    //POST
    router.post('/', statusController.createStatus);
}