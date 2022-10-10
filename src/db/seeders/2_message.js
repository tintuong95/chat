'use strict';
const {faker}=require('@faker-js/faker')

let messages = [];
for (var i = 1; i <= 500; i++) {
  messages.push({
    id: i,
    roomID: faker.datatype.number({ min: 0, max: 100 }), //admin123
    message: faker.lorem.lines(1),
    status: faker.datatype.boolean(),
    createdAt: faker.date.between(
      "2022-01-01T00:00:00.000Z",
      "2022-12-01T00:00:00.000Z"
    ),
    updatedAt: faker.date.between(
      "2022-01-01T00:00:00.000Z",
      "2022-12-01T00:00:00.000Z"
    ),
  });
}

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert("Messages", messages, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Messages", null, {});
  }
};
