const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:leonardojs@localhost:5432/gestion_academica',{
    logging: false
})

module.exports=sequelize