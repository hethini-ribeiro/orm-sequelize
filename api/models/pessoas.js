'use strict';

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Pessoas = Sequelize.define('Pessoas', {
        nome: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, { paranoid: true });
    Pessoas.associate = function(models) {
        Pessoas.hasMany(models.Turmas, {
            foreignKey: 'docente_id'
        })
        Pessoas.hasMany(models.Matriculas, {
            foreignKey: 'estudante_id'
        })
    };
    return Pessoas;
}