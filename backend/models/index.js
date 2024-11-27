const sequelize = require('../db')


// const Tuition = require('./tuition') 
// const Course = require('./course')
const User = require('./User')
const Matricula = require('./Matricula')
const Docente =require("./docente")
const Carrera = require('./carrera');

const db ={
    sequelize,
    // Tuition,
    // Course,
    User,
    Matricula,
    Docente,
    Carrera

    //Agregar más módelos aquí.
}

module.exports = db