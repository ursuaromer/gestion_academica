const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:romer180105@localhost:5432/gestion_academica',{
    logging: false
})

module.exports=sequelize