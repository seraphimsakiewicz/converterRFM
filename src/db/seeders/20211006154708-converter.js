'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Converters', [{
      path: 'sd,fnmksldfjlksdfjlsd',
      originId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Converters', null, { truncate: true, restartIdentity: true });
  }
};
