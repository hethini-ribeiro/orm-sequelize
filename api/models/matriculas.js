'use strict';

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Matriculas = Sequelize.define('Matriculas', {
        status: DataTypes.STRING
    }, {paranoid: true });
    Matriculas.associate = function(models) {
        Matriculas.belongsTo(models.Pessoas, {
            foreignKey: 'estudante_id'
        })
        Matriculas.belongsTo(models.Turmas, {
            foreignKey: 'turma_id'
        })
    };
    return Matriculas;
}