const { Router } = require('express');
const bcrypt = require('bcrypt');
const { 
    createUserController, 
    getAllUserController, 
    updateUserByDniController, 
    deleteUserByDniController, 
    getUserByDniController 
} = require('../controllers/userControllers');

const userRouter = Router();

// Crear nuevo usuario
userRouter.post("/", async (req, res) => {
    const { dni, nombre, apellido, contraseña, rol } = req.body;

    if (!dni || !nombre || !apellido || !contraseña || !rol) {
        return res.status(400).json({ error: "Faltan campos requeridos: dni, nombre, apellido, contraseña o rol." });
    }

    try {
        const newUser = await createUserController({ dni, nombre, apellido, contraseña, rol });
        res.status(201).json({ message: "Usuario creado con éxito", user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta de inicio de sesión
userRouter.post("/login", async (req, res) => {
    const { dni, contraseña } = req.body;

    if (!dni || !contraseña) {
        return res.status(400).json({ error: "Faltan campos: dni o contraseña." });
    }

    try {
        const user = await getUserByDniController(dni);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }

        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Contraseña incorrecta." });
        }

        res.status(200).json({
            dni: user.dni,
            rol: user.rol,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todos los usuarios
userRouter.get("/", async (req, res) => {
    try {
        const users = await getAllUserController();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener usuario por DNI
userRouter.get("/:dni", async (req, res) => {
    const { dni } = req.params;

    try {
        const user = await getUserByDniController(dni);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar usuario por DNI
userRouter.put("/:dni", async (req, res) => {
    const { dni } = req.params;
    const userData = req.body;

    try {
        const updatedUser = await updateUserByDniController(dni, userData);
        if (!updatedUser) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar usuario por DNI
userRouter.delete("/:dni", async (req, res) => {
    const { dni } = req.params;

    try {
        const deletedUser = await deleteUserByDniController(dni);
        if (!deletedUser) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.status(200).json({ message: "Usuario eliminado con éxito." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = { userRouter };
