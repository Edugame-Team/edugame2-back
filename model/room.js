const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');

class Room extends Model { }

Room.init({
  // Model attributes are defined here
  room_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  room_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  room_config: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'Room', // We need to choose the model name
});

module.exports = Room;
