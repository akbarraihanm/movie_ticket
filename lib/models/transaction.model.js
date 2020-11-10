module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('transactions', {
        bookingName: {
            type: DataTypes.STRING
        },
        countTicket: {
            type: DataTypes.INTEGER
        },
        bookDate: {
            type: DataTypes.DATE
        },
        totalPrice: {
            type: DataTypes.INTEGER
        },
        phoneNumber: {
            type: DataTypes.STRING(13),
        }
    });

    return Transaction;
}