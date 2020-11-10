module.exports = app => {
    const transactionController = require('../controllers/transaction.controller');
    var router = require('express').Router();

    app.use('/api/transactions', router);

    //GET
    router.get('/', transactionController.getAllTransactions);
    router.get('/detail', transactionController.getById);

    //POST
    router.post('/', transactionController.createTransaction);

    //PUT
    router.put('/edit', transactionController.updateById);

    //DELETE
    router.delete('/', transactionController.deleteById);
}