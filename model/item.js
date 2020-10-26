const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');

class Item extends Model { }

Item.init({
  // Model attributes are defined here
  item_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  item_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  item_creation_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'Item', // We need to choose the model name
});

module.exports = Item;
