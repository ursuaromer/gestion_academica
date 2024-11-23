// userroutes.js
const { Router } = require('express');
const bcrypt = require('bcrypt');
const { createUserController, getAllUserController, updateUserByIdController, deleteUserByIdController, getUserByDniController } = require('../controllers/userControllers');

const userRouter = Router();

// Crear nuevo usuario
userRouter.post("/", async (req, res) => {
    const { dni, username, password, role } = req.body;
    try {
        const newUser = await createUserController({ dni, username, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta de inicio de sesión
userRouter.post("/login", async (req, res) => {
    const { dni, password } = req.body;  // Solo usamos 'dni' y 'password'

    // Verifica que los datos están llegando correctamente
    console.log("Datos recibidos:", req.body);  // Verifica el cuerpo de la solicitud

    if (!dni || !password) {
        return res.status(400).json({ error: "Faltan campos: dni o password" });
    }

    try {
        // Buscar al usuario por su DNI
        const user = await getUserByDniController(dni);  // Buscar usuario por DNI
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Comparar la contraseña encriptada
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        // Si las credenciales son correctas, responder con la información del usuario
        res.status(200).json({
            id: user.id,
            dni: user.dni,
            username: user.username,
            role: user.role,  // El rol del usuario
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

// Actualizar usuario por ID
userRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
        const updatedUser = await updateUserByIdController(id, userData);
        if (!updatedUser) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar usuario por ID
userRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUserByIdController(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = { userRouter };
