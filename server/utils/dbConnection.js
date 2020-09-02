const sequelize = require('sequelize');
require('dotenv').config();

console.log(process.env.DEV_DB_DATABASE);

const dbConnection = new sequelize.Sequelize(
  process.env.DEV_DB_DATABASE,
  process.env.DEV_DB_USERNAME,
  process.env.DEV_DB_PASSWORD,
  {
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DB_DIALECT,
    port: process.env.DEV_DB_PORT,
  },
);

module.exports = dbConnection;
