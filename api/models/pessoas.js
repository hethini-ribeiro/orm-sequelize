'use strict';

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Pessoas = Sequelize.define('Pessoas', {
        nome: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    }, {});
    Pessoas.associate = function(models) {
    };
    return Pessoas;
}