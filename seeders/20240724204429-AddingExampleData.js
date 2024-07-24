'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const now = new Date()
    await queryInterface.bulkInsert("Galaxies", [
      {name: "Test Galaxy 1", diameter: "100,000 light years", type: "Spiral",createdAt: now, updatedAt: now},
      {name: "Test Galaxy 2", diameter: "200,000 light years", type: "Spiral", createdAt: now, updatedAt: now},
      {name: "Test Galaxy 3", diameter: "300,000 light years", type: "Spiral",createdAt: now, updatedAt: now},
    ])
    await queryInterface.bulkInsert("Stars", [
      {name: "Test Star 1", magnitude: "1", type: "Red giant",createdAt: now, updatedAt: now},
      {name: "Test Star 2", magnitude: "2", type: "Yellow Dwarf",createdAt: now, updatedAt: now},
      {name: "Test Star 3", magnitude: "3", type: "Blue Giant", createdAt: now, updatedAt: now},
    ])
    await queryInterface.bulkInsert("Planets", [
      {name: "Test Planet 1", age: "1", type: "terrestial", createdAt: now, updatedAt: now},
      {name: "Test Planet 2", age: "2", type: "terrestial ",createdAt: now, updatedAt: now},
      {name: "Test Planet 3", age: "3", type: "terrestial", createdAt: now, updatedAt: now},
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Galaxies", [{name:"Test Galaxy 1"},{name: "Test Galaxy 2"}, {name:"Test Galaxy 3"}])
    await queryInterface.bulkDelete("Stars", [{name:"Test Star 1"},{name: "Test Star 2"}, {name:"Test Star 3"}])
    await queryInterface.bulkDelete("Planets", [{name:"Test Planet 1"},{name: "Test Planet 2"}, {name:"Test Planet 3"}])
  } 
    
};
