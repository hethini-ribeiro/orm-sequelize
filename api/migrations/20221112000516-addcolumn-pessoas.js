'use strict';

const { STRING } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Pessoas', 'deletedAt', {
        allowNUll: true,
        type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pessoas', 'deletedAt');
  }
};
