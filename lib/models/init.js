const dbConfig = require('../config/database');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    timezone: "+07:00",
    operatorAliases: false,
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        }
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movie = require('./movie.model')(sequelize,Sequelize.DataTypes);
db.genre = require('./genre.model')(sequelize,Sequelize.DataTypes);
db.movieStatus = require('./movieStatus.model')(sequelize,Sequelize.DataTypes);
db.price = require('./price.model')(sequelize,Sequelize.DataTypes);
db.transaction = require('./transaction.model')(sequelize, Sequelize.DataTypes);

//Relations

db.movie.belongsTo(db.genre, {
  foreignKey: "movieGenreId",
  as: "genre"
});
db.movie.belongsTo(db.movieStatus, {
  foreignKey: "movieStatusId",
  as: "movieStatus"
});
db.transaction.belongsTo(db.movie, {
  foreignKey: "movieId",
  as: "movie"
});
db.transaction.belongsTo(db.price, {
  foreignKey: "priceId",
  as: "price"
});

/////////////////////////////////////

module.exports = db;