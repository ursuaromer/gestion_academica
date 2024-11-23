const sequelize = require('../db')


// const Tuition = require('./tuition') 
// const Course = require('./course')
const User = require('./User')

const db ={
    sequelize,
    // Tuition,
    // Course,
    User

    //Agregar más módelos aquí.
}

module.exports = db