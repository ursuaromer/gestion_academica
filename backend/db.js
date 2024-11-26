const { Sequelize } = require('sequelize');

// Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('postgres://postgres:romer180105@localhost:5432/gestion_suiza', {
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa con la base de datos PostgreSQL'))
    .catch(err => console.error('Error al conectar con la base de datos:', err));

// Exportar la instancia de Sequelize
module.exports = sequelize;
