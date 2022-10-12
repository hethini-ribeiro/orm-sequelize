'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Niveis', [{
        descri_nivel: 'Basico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descri_nivel: 'Intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descri_nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Niveis', null, {});
  }
};
