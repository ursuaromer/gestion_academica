const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de configurar tu archivo db.js correctamente

const Carrera = sequelize.define('Carrera', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: "El nombre de la carrera es requerido.",
      },
      len: {
        args: [3, 100],
        msg: "El nombre de la carrera debe tener entre 3 y 100 caracteres.",
      },
    },
  },
  jefe_area: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "El nombre del jefe de área es requerido.",
      },
      len: {
        args: [3, 100],
        msg: "El nombre del jefe de área debe tener entre 3 y 100 caracteres.",
      },
    },
  },
}, {
  tableName: 'carreras', // Nombre de la tabla en la base de datos
  timestamps: true, // Para createdAt y updatedAt
});

module.exports = Carrera;
