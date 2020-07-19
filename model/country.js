const { DataTypes, Model } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');

class Country extends Model { }

Country.init({
    // Model attributes are defined here
    country_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    country_trigramme: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
    },
    country_trigramme_eng: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
    },
}, {
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    //indexes: [{ unique: true, fields: ['country_id', 'country_trigramme', 'country_trigramme_eng'] }],
    sequelize, // We need to pass the connection instance
    modelName: 'Country' // We need to choose the model name
});

module.exports = Country;

// the defined model is the class itself
console.log(Country === sequelize.models.Country); // true