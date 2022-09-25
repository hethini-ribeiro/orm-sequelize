'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Sandra Gomes',
        ativo: false,
        email: 'sandragomes@sandra.com',
        role: 'estudante'
      },
      {
        nome: 'Fabricio Gomes',
        ativo: true,
        email: 'fabriciogomes@gmail.com',
        role: 'estudante'
      },
      {
        nome: 'Simone Gomes',
        ativo: true,
        email: 'simonegomes@gmail.com',
        role: 'docente'
      },
      {
        nome: 'Carlos Gomes',
        ativo: false,
        email: 'carlosgomes@gmail.com',
        role: 'docente'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
