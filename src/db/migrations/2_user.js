"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rooms", {
      id: {
        allowNull: false,

        primaryKey: true,
        type: Sequelize.STRING,
      },
      roomId: {
        type: Sequelize.STRING,
      },
       status: {
        type: Sequelize.BOOLEAN,
      },
      count:{
       type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Rooms");
  },
};
