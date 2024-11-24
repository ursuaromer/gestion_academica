const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');  // Aquí se importan todas las rutas

const app = express();

app.use(cors()); // Habilitar CORS si es necesario
app.use(bodyParser.json()); // Para procesar JSON en las peticiones

// Rutas
app.use('/api', routes);  // Si tienes un prefijo 'api', debes usarlo en las rutas

// Inicio del servidor
const server = require('./server');
const db = require('./models/index');

db.sequelize.sync({ alter: true })
  .then(() => {
    server.listen(3001, () => {
      console.log('SERVIDOR CORRIENDO EN EL PUERTO 3001');
    });
  })
  .catch(err => console.log('Error al sincronizar Base de datos', err.message));
