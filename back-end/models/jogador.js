

const Sequelize = require('sequelize');
const db = require('./db');

const Jogador = db.define('player',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    pontuacao:{
        type: Sequelize.INTEGER,
        allowNull:true
    }
})

module.exports = Jogador