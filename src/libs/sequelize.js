const { Sequelize } = require('sequelize');

const  { config } = require('../config/config');
const setupModels = require('./../db/models');
  
const sequelize = new Sequelize(
    config.dbName, // name database
    config.dbUser, // user database
    config.dbPassword, // password database
    {
      host: config.dbHost,
      dialect: 'postgresql' 
    }
  );

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;