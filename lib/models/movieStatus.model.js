module.exports = (sequelize, DataTypes) => {
    const MovieStatus = sequelize.define('movie_statusses', {
        status: {
            type: DataTypes.STRING
        }
    });

    return MovieStatus;
}