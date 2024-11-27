const Carrera = require('../models/carrera');

// Crear una nueva carrera
const createCarreraController = async ({ id, nombre, jefe_area }) => {
    try {
        console.log('Datos para crear carrera:', { id, nombre,jefe_area }); // Log para confirmar los datos
        const newCarrera = await Carrera.create({ id, nombre,jefe_area });
        return newCarrera;
    } catch (error) {
        console.error('Error al crear carrera:', error); 
        throw new Error(error.message);
    }
};

// Obtener todas las carreras
const getAllCarrerasController = async () => {
    try {
        const carreras = await Carrera.findAll();
        return carreras;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Actualizar una carrera por ID
const updateCarreraByIdController = async (id, carreraData) => {
    try {
        const carrera = await Carrera.findByPk(id);
        if (!carrera) {
            return null;
        }
        await carrera.update(carreraData);
        return carrera;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Eliminar una carrera por ID
const deleteCarreraByIdController = async (id) => {
    try {
        const carrera = await Carrera.findByPk(id);
        if (!carrera) {
            return null;
        }
        await carrera.destroy();
        return carrera;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createCarreraController,
    getAllCarrerasController,
    updateCarreraByIdController,
    deleteCarreraByIdController
};
