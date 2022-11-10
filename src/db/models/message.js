const { DataTypes } = require("sequelize");
const shortid = require("shortid");
const sequelize = require("../../config/sequelize.js");


const Message = sequelize.define(
  "Messages",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => shortid.generate(),
    },
    content: DataTypes.TEXT,
    roomId: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    state: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "Messages",
  }
);

module.exports = Message;

