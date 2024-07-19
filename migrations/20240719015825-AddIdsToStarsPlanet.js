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
    queryInterface.addColumn("StarsPlanets", "planetId",{
      type: Sequelize.INTEGER,
      references:{
        model: {
          tableName: 'Planets'
        },
        key: 'id'
      },
      allowNull: true
    })
    queryInterface.addColumn("StarsPlanets", "starId",{
      type: Sequelize.INTEGER,
      references:{
        model: {
          tableName: 'Stars'
        },
        key: 'id'
      },
      allowNull: true
    })
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn("StarsPlanets", "planetId")
    queryInterface.removeColumn("StarsPlanets", "starId")
    
  }
};
