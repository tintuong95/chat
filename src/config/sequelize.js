const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chatbox", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


module.exports=sequelize