const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');
const Grade = require('./grade');

class Discipline extends Model { }

Discipline.init({
  // Model attributes are defined here
  discipline_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  discipline_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discipline_register_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  grade_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Grade,
      key: 'grade_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'Discipline', // We need to choose the model name
});

module.exports = Discipline;
