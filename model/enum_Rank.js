const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');
const Country = require('./country');

class Enum_Rank extends Model { }

Enum_Rank.init({
    // Model attributes are defined here
    enum_rank_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    enum_rank_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    enum_rank_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    country_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'country_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Enum_Rank' // We need to choose the model name
});

module.exports = Enum_Rank;