const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/dbConnection');

class Profile extends Model { }

Profile.init({
    // Model attributes are defined here
    profile_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    profile_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    profile_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Profile' // We need to choose the model name
});

module.exports = Profile;
