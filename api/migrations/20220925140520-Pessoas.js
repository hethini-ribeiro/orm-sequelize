'use strict';

const { STRING } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas',{
      id: {
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: Sequelize.STRING,
      ativo: Sequelize.BOOLEAN,
      role: Sequelize.STRING,
      email: Sequelize.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pessoas');
  }
};
