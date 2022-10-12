'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Turmas', [{
        data_inicio: '2020-07-01',
        nivel_id: 3,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2020-01-01',
        nivel_id: 2,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2020-01-01',
        nivel_id: 1,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});
  }
};
