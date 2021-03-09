'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserPlace.init({
    userId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserPlace',
  });
  return UserPlace;
};