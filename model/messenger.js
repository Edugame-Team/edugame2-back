const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/dbConnection');
const User = require('./user');

class Messenger extends Model { }

Messenger.init({
    // Model attributes are defined here
    messenger_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    messenger_from_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    messenger_to_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    messenger_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    messenger_gift: {
        type: DataTypes.STRING,
    },
    messenger_read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0',
    },
    messenger_send_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Messenger' // We need to choose the model name
});

module.exports = Messenger;
