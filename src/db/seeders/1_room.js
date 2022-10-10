'use strict';
const {faker}=require('@faker-js/faker')

let rooms = [];
for (var i = 1; i <= 100; i++) {
  rooms.push({
    id: i,
    name: faker.name.fullName(), //admin123
    count: faker.datatype.number({ min: 0, max: 100 }),
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
  
      await queryInterface.bulkInsert("Rooms", rooms, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rooms", null, {});
  }
};
