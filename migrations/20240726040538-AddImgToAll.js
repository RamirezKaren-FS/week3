'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn("Galaxies", "img",{
      type: Sequelize.STRING
    })
    queryInterface.addColumn("Stars", "img",{
      type: Sequelize.STRING
    })
    queryInterface.addColumn("Planets", "img",{
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn("Galaxies", "img")
    queryInterface.removeColumn("Stars", "img")
    queryInterface.removeColumn("Planets", "img")

  }
};
