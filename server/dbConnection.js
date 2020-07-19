const sequelize = require('sequelize');
const config = require('../config/config.json');

const dbConnection = new sequelize.Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        dialect: config.development.dialect,
        port: config.development.port,
    }
);

module.exports = dbConnection;