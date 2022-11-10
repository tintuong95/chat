const { DataTypes } = require("sequelize");
const shortid = require("shortid");
const sequelize = require("../../config/sequelize.js");

const Rooms = sequelize.define(
  "Rooms",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => shortid.generate(),
    },
    roomId: {
      type: DataTypes.STRING,
    },
    status:{
      type:DataTypes.BOOLEAN,
       defaultValue: false
    },
     count:{
       type: DataTypes.INTEGER,
        defaultValue: 0
      },
  },
  {
    
    sequelize,
    modelName: "Rooms",
  }
);



module.exports = Rooms;
