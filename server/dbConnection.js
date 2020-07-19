const sequelize = require('sequelize');
const config = require('../config/config.json');
const util = require('util');

const dbConnection = new sequelize.Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        dialect: config.development.dialect,
        port: config.development.port,
    }
);

console.log(`Db from dbConnection.js = ${util.inspect(dbConnection, true, null, true)}`);

module.export = { dbConnection };