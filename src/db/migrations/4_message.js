"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Messages", {
      id: {
        allowNull: false,
 
        primaryKey: true,
        type: Sequelize.STRING,
      },
      roomID: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Messages");
  },
};
