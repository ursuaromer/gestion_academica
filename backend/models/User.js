const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define('Usuario', {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    dni: { type: DataTypes.STRING(8), allowNull: false, unique: true },
    contraseña: { type: DataTypes.STRING, allowNull: false },
    rol: { 
        type: DataTypes.ENUM('admin', 'docente', 'estudiante'), 
        allowNull: false 
    },
}); 

module.exports = Usuario;