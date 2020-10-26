const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');

class Practise extends Model { }

Practise.init({
  // Model attributes are defined here
  practise_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  practise_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  practise_params: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  practise_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: '0',
  },
  practise_date_creation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  practise_last_modify_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'Practise', // We need to choose the model name
});

module.exports = Practise;
