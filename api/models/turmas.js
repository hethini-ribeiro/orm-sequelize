'use strict';

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Turmas = Sequelize.define('Turmas', {
        data_inicio: DataTypes.DATEONLY
    }, {});
    Turmas.associate = function(models) {
        Turmas.hasMany(models.Matriculas, {
            foreignKey: 'turma_id'
        })
        Turmas.belongsTo(models.Pessoas, {
            foreignKey: 'docente_id'
        })
        Turmas.belongsTo(models.Niveis, {
            foreignKey: 'nivel_id'
        })
    };
    return Turmas;
}