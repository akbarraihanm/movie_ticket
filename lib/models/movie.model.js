module.exports =  (sequelize,DataTypes) => {
    const Movie = sequelize.define('movies', {
        movieTitle: {
            type: DataTypes.STRING            
        },
        posterPath: {
            type: DataTypes.STRING
        },
        backdropPath: {
            type: DataTypes.STRING
        },
        overview: {
            type: DataTypes.TEXT
        },
        releasedDate: {
            type: DataTypes.DATE
        }
    });

    return Movie;
}