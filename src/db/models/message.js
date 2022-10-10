"use strict";
const {v4} = require('uuid');
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {}
  }
  Message.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => v4()
      },
      roomID: DataTypes.STRING,

      message: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Messages",
    }
  );
  return Message;
};
