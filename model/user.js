const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/dbConnection');
const Grade = require('./grade');
const Profile = require('./profile');
const Character = require('./character');

class User extends Model { }

User.init({
    // Model attributes are defined here
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    user_username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_parents_mail: {
        type: DataTypes.STRING,
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0',
    },
    user_params: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    user_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_lat_connect_date: {
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
    profile_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Profile,
            key: 'profile_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Character,
            key: 'character_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

module.exports = User;
