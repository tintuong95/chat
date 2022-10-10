"use strict";
const { faker } = require("@faker-js/faker");
const { Model } = require("sequelize");
const { v4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {}
  }
  Room.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
       
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: () => faker.name.fullName(),
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Rooms",
    }
  );
  return Room;
};
