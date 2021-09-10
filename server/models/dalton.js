'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dalton extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dalton.init({
    reason: DataTypes.STRING,
    p_earned_id: DataTypes.INTEGER,
    p_took_id: DataTypes.INTEGER,
    date_earned: DataTypes.DATE,
    date_took: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Dalton',
  });
  return Dalton;
};