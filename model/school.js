const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');
const GroupSchool = require('./group_School');

class School extends Model { }

School.init({
  // Model attributes are defined here
  school_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  school_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  school_register_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  group_school_id: {
    type: DataTypes.INTEGER,
    references: {
      model: GroupSchool,
      key: 'group_school_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'School', // We need to choose the model name
});

module.exports = School;
