'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.renameTable('users', 'persons');
    await queryInterface.addColumn('users', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '333-333-3333'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.renameTable('persons', 'users');
    await queryInterface.removeColumn('users', 'phoneNumber');
  }
}
