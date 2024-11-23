const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Matricula = sequelize.define('Matricula',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
        
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    programaEstudio: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Matricula