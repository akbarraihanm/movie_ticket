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

db.price = require('./price.model')(sequelize,Sequelize.DataTypes);
db.time = require('./time.model')(sequelize, Sequelize.DataTypes);
db.transaction = require('./transaction.model')(sequelize, Sequelize.DataTypes);

//Relations

db.transaction.belongsTo(db.price, {
  foreignKey: "priceId",
  as: "price"
});

db.transaction.belongsTo(db.time, {
  foreignKey: "timeId",
  as: "time"
});

/////////////////////////////////////

module.exports = db;