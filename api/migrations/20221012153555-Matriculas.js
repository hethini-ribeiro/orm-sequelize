'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', { 
      id: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true
      },
      status: {
        type: Sequelize.STRING
      },
      estudante_id: {
        allowNUll: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pessoas', key: 'id'}
      },
      turma_id: {
        allowNUll: false,
        type: Sequelize.INTEGER,
        references: { model: 'Turmas', key: 'id'}
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Matriculas');
  }
};
