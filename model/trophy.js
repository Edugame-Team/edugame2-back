const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');

class Trophy extends Model { }

Trophy.init({
  // Model attributes are defined here
  trophy_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  trophy_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trophy_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trophy_condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trophy_image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'defaultImage',
  },
  trophy_date_creation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'Trophy', // We need to choose the model name
});

module.exports = Trophy;
