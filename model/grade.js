const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');
const Enum_Rank = require('./enum_Rank');

class Grade extends Model { }

Grade.init({
    // Model attributes are defined here
    grade_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    grade_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    grade_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    enum_rank_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Enum_Rank,
            key: 'enum_rank_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Grade' // We need to choose the model name
});

module.exports = Grade;