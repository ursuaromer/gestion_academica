const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de configurar tu archivo db.js correctamente

const Docente = sequelize.define('Docente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: "El código es requerido.",
      },
      isAlphanumeric: {
        msg: "El código debe ser alfanumérico.",
      },
    },
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "El nombre es requerido.",
      },
      is: {
        args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        msg: "El nombre solo debe contener letras.",
      },
    },
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "El apellido es requerido.",
      },
      is: {
        args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        msg: "El apellido solo debe contener letras.",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: "El email es requerido.",
      },
      isEmail: {
        msg: "El email no es válido.",
      },
    },
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "La especialidad es requerida.",
      },
    },
  },
  fechaContratacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "La fecha de contratación es requerida.",
      },
      isDate: {
        msg: "La fecha de contratación debe ser válida.",
      },
    },
  },
}, {
  tableName: 'docentes', // Nombre de la tabla en la base de datos
  timestamps: true, // Para createdAt y updatedAt
});

module.exports = Docente;
