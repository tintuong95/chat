const { Sequelize } = require("sequelize");
require("dotenv").config()


const { DB_NAME = "name", DB_HOST = "host", DB_USERNAME = "root", DB_PASSWORD = "" } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});


module.exports = sequelize