const Sequelize = require('sequelize');

const connection = require('../database/database');

const Receitas = connection.define(
    'tbl_receitas',
    {
        nome_receitas:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//receitas.sync({force:true});

module.exports = Receitas;




