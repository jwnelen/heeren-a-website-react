'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init({
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    singles_rating: DataTypes.DOUBLE,
    singles_rating_end: DataTypes.INTEGER,
    doubles_rating: DataTypes.DOUBLE,
    doubles_rating_end: DataTypes.INTEGER,
    is_heeren_a: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};