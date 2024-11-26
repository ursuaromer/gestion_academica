const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dni: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['admin', 'docente', 'estudiante']], // Rol permitido adefwefergdfgesrd
        },
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'usuarios',
    timestamps: false,
});

module.exports = User; 
