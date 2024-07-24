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
    queryInterface.changeColumn("Galaxies", "description",{
      type: Sequelize.TEXT
    })
    queryInterface.changeColumn("Stars", "description",{
      type: Sequelize.TEXT
    })
    queryInterface.changeColumn("Planets", "description",{
      type: Sequelize.TEXT
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.changeColumn("Galaxies", "description",{
      type: Sequelize.JSON
    })
    queryInterface.changeColumn("Stars", "description",{
      type: Sequelize.JSON
    })
    queryInterface.changeColumn("Planets", "description",{
      type: Sequelize.JSON
    })
  }
};
