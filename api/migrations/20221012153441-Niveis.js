'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Niveis', 
    { 
      id: {
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descri_nivel: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Niveis');
  }
};
