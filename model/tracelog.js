const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');
const User = require('./user');

class Trace_Log extends Model { }

Trace_Log.init({
    // Model attributes are defined here
    tracelog_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    tracelog_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tracelog_params: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tracelog_score: {
        type: DataTypes.INTEGER,
    },
    tracelog_success: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0',
    },
    tracelog_register_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Trace_Log' // We need to choose the model name
});

module.exports = Trace_Log;
