'use strict';

const { STRING } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Niveis', 'deletedAt', {
        allowNUll: true,
        type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Niveis', 'deletedAt');
  }
};
