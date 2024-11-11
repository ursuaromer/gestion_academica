const sequelize = require('../db')


const Tuition = require('./tuition') 
const Course = require('./course')

const db ={
    sequelize,
    Tuition,
    Course,
    //Agregar más módelos aquí.
}

module.exports = db