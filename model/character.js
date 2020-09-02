const { DataTypes, Model, Deferrable } = require('sequelize');
const sequelize = require('../server/utils/dbConnection');
const Item = require('./item');
const Trophy = require('./trophy');

class Character extends Model { }

Character.init({
  // Model attributes are defined here
  character_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  character_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  character_experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  character_hat_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'item_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_cloak_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'item_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_pet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'item_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_body_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'item_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_bottom_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'item_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_shoes_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'item_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_trophy_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Trophy,
      key: 'trophy_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  character_skin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  character_skin_color: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1,
  },
  character_personnalized_message: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Hi!',
  },
  character_last_modified_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  defaultScope: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
  sequelize, // We need to pass the connection instance
  modelName: 'Character', // We need to choose the model name
});

module.exports = Character;
