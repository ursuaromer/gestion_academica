const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:EVERPISCIS@24@localhost:5432/sistema',{
    logging: false
})

module.exports=sequelize