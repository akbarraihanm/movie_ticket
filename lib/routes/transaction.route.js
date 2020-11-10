module.exports = app => {
    const transactionController = require('../controllers/transaction.controller');
    var router = require('express').Router();

    app.use('/api/transactions', router);

    //GET
    router.get('/', transactionController.getAllTransactions);

    //POST
    router.post('/', transactionController.createTransaction);
}