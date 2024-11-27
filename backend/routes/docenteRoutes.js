const { Router } = require('express');
const {
  createDocente,
  getDocentes,
  getDocenteById,
  updateDocente,
  deleteDocente,
} = require('../controllers/docenteController');

const docenteRouter = Router();

// Crear un nuevo docente
docenteRouter.post("/", async (req, res) => {
  const { codigo, nombre, apellido, email, especialidad, fechaContratacion } = req.body;
  try {
    const newDocente = await createDocente({ codigo, nombre, apellido, email, especialidad, fechaContratacion });
    res.status(201).json(newDocente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los docentes
docenteRouter.get("/", async (req, res) => {
  try {
    const docentes = await getDocentes();
    res.status(200).json(docentes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener un docente por su ID
docenteRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const docente = await getDocenteById(id);
    if (!docente) {
      return res.status(404).json({ error: "Docente no encontrado" });
    }
    res.status(200).json(docente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un docente por su ID
docenteRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const docenteData = req.body;
  try {
    const updatedDocente = await updateDocente(id, docenteData);
    if (!updatedDocente) {
      return res.status(404).json({ error: "Docente no encontrado" });
    }
    res.status(200).json(updatedDocente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un docente por su ID
docenteRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDocente = await deleteDocente(id);
    if (!deletedDocente) {
      return res.status(404).json({ error: "Docente no encontrado" });
    }
    res.status(200).json({ message: "Docente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  docenteRouter
};
