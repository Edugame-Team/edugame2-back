const sequelize = require('sequelize');
require('dotenv').config();

console.log(process.env.DB_DATABASE);

const dbConnection = new sequelize.Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  },
);

module.exports = dbConnection;
