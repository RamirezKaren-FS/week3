'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Planet.hasMany(models.StarsPlanets)
      models.Planet.belongsTo(models.Star)
    }
  }
  Planet.init({
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    type: DataTypes.STRING,
    starId: DataTypes.INTEGER,
    description: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Planet',
  });
  return Planet;
};