module.exports = (sequelize,DataTypes) => {
    const Price = sequelize.define('prices', {
        price: {
            type: DataTypes.INTEGER
        },
        weekday: {
            type: DataTypes.BOOLEAN
        }
    });

    return Price;
}