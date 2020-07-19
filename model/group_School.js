const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/dbConnection');

class Group_School extends Model { }

Group_School.init({
    // Model attributes are defined here
    group_school_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    group_school_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    group_school_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Group_School' // We need to choose the model name
});

module.exports = Group_School;