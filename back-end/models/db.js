const Sequelize = require('sequelize');
const db = new Sequelize('game', 'root', '123456',{
    dialect:'mysql',
    host:'localhost'
})

db.authenticate().then(function(){
    console.log('Banco de dados conectado')
}).catch(function(){
    console.error('error: banco de dados não conectado')
});

module.exports = db




