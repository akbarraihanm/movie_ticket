module.exports = app => {
    const priceController = require('../controllers/price.controller');
    var router = require('express').Router();

    app.use('/api/prices', router);

    //GET
    router.get('/', priceController.getPriceList);

    //POST
    router.post('/', priceController.createPrice);
}