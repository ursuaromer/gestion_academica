const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING(8), // Supone un DNI con 8 caracteres
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true, // Asegura que solo contenga números
            len: [8, 8], // Requiere exactamente 8 caracteres
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100], // Longitud mínima de 6 caracteres
        },
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['admin', 'profesor', 'estudiante']], // Valida que el rol sea uno de los valores permitidos
        },
    },
}, {
    tableName: 'User', // Nombre de la tabla en singular
    timestamps: true, // Incluye createdAt y updatedAt
});

module.exports = User;
