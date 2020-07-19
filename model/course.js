const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/dbConnection');

class Course extends Model { }

Course.init({
    // Model attributes are defined here
    course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    course_params: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    course_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0',
    },
    course_date_creation: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    course_last_modify_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    sequelize, // We need to pass the connection instance
    modelName: 'Course' // We need to choose the model name
});

module.exports = Course;
