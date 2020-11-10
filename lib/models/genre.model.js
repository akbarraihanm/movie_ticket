module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('genres', {
        genre: {
            type: DataTypes.STRING
        }
    });

    return Genre;
}