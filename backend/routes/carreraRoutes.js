const { Router } = require('express');
const { 
    createCarreraController, 
    getAllCarrerasController, 
    updateCarreraByIdController, 
    deleteCarreraByIdController 
} = require('../controllers/carreraControllers');

const carreraRouter = Router();

// Crear una nueva carrera
carreraRouter.post("/", async (req, res) => {
    console.log('Body recibido:', req.body);
    const { nombre,jefe_area } = req.body;
    try {
        const newCarrera = await createCarreraController({ nombre,jefe_area });
        res.status(201).json(newCarrera);
    } catch (error) {
        console.error('Error en POST /carreras:', error);
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las carreras
carreraRouter.get("/", async (req, res) => {
    try {
        const carreras = await getAllCarrerasController();
        res.status(200).json(carreras);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar una carrera por ID
carreraRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const carreraData = req.body;
    try {
        const updatedCarrera = await updateCarreraByIdController(id, carreraData);
        if (!updatedCarrera) {
            return res.status(404).json({ error: "Carrera not found" });
        }
        res.status(200).json(updatedCarrera);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una carrera por ID
carreraRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCarrera = await deleteCarreraByIdController(id);
        if (!deletedCarrera) {
            return res.status(404).json({ error: "Carrera not found" });
        }
        res.status(200).json({ message: "Carrera deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = { carreraRouter };