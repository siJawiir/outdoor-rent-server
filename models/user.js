"use strict";
const {encryptPass} = require('../helpers/bcrypt')
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item)
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username must not be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must not be empty",
          },
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password must not be empty",
          },
        },
      },
      image: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(user, options) {
          user.password = encryptPass(user.password)
          user.image = user.image || 'https://via.placeholder.com/150'
        },
      },
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
