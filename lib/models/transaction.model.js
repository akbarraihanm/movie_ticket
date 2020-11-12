module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('transactions', {
        bookingName: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING(13),
        },
        movieTitle: {
            type: DataTypes.STRING
        },
        moviePoster: {
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
    });

    return Transaction;
}