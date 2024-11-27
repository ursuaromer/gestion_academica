const Docente = require('../models/Docente');  // Asegúrate de tener el modelo de Docente

// Crear un nuevo docente
const createDocente = async ({ codigo, nombre, apellido, email, especialidad, fechaContratacion }) => {
  try {
    const newDocente = new Docente({ codigo, nombre, apellido, email, especialidad, fechaContratacion });
    await newDocente.save();
    return newDocente;
  } catch (error) {
    throw new Error("Error al crear el docente: " + error.message);
  }
};

// Obtener todos los docentes
const getDocentes = async () => {
  try {
    const docentes = await Docente.findAll();
    return docentes;
  } catch (error) {
    throw new Error("Error al obtener los docentes: " + error.message);
  }
};

// Obtener un docente por su ID
const getDocenteById = async (id) => {
  try {
    const docente = await Docente.findById(id);
    return docente;
  } catch (error) {
    throw new Error("Error al obtener el docente: " + error.message);
  }
};

// Actualizar un docente por su ID
const updateDocente = async (id, docenteData) => {
  try {
    const updatedDocente = await Docente.findByIdAndUpdate(id, docenteData, { new: true });
    return updatedDocente;
  } catch (error) {
    throw new Error("Error al actualizar el docente: " + error.message);
  }
};

// Eliminar un docente por su ID
const deleteDocente = async (id) => {
  try {
    const deletedDocente = await Docente.findByIdAndDelete(id);
    return deletedDocente;
  } catch (error) {
    throw new Error("Error al eliminar el docente: " + error.message);
  }
};

module.exports = {
  createDocente,
  getDocentes,
  getDocenteById,
  updateDocente,
  deleteDocente,
};
