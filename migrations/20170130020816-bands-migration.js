'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('bands',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('bands', {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
