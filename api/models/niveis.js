'use strict';

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Niveis = Sequelize.define('Niveis', {
        descri_nivel: DataTypes.STRING
    }, {paranoid: true });
    Niveis.associate = function(models) {
        Niveis.hasMany(models.Turmas, {
            foreignKey: 'nivel_id'
        })
    };
    return Niveis;
}