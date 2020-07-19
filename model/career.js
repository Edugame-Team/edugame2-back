const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/dbConnection');
const Grade = require('./grade');

class Career extends Model { }

Career.init({
    // Model attributes are defined here
    career_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    career_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    career_config: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    career_condition: {
        type: DataTypes.STRING,
    },
    career_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    career_last_modified_date: {
        type: DataTypes.DATE,
    },
    grade_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Grade,
            key: 'grade_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Career' // We need to choose the model name
});

module.exports = Career;
