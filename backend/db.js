const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:260106@localhost:5432/academica',{
    logging: false
})

module.exports=sequelize