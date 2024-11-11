const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Tuition = sequelize.define('Tuition',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
        
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Tuition