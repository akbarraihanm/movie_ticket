module.exports = (sequelize, DataTypes) => {
    const Time = sequelize.define('times', {
        time: {
            type: DataTypes.STRING
        }
    });
    
    return Time;
}