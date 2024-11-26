const User = require('../models/User');
const bcrypt = require('bcrypt');

// Crear un nuevo usuario
const createUserController = async ({ dni, username, password, role }) => {
    try {
        if (!dni || !username || !password || !role) {
            throw new Error('Faltan datos requeridos para crear el usuario.');
        }

        // Verificar si el DNI ya existe
        const existingUser = await User.findOne({ where: { dni } });
        if (existingUser) {
            throw new Error('El usuario con este DNI ya existe.');
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const newUser = await User.create({
            dni,
            username, // Asegúrate de incluir username aquí
            password: hashedPassword,
            role,
        });

        return newUser;
    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
    }
};

// Obtener un usuario por DNI
const getUserByDniController = async (dni) => {
    try {
        if (!dni) {
            throw new Error('El DNI es obligatorio para buscar un usuario.');
        }

        const user = await User.findOne({ where: { dni } });
        if (!user) {
            return null; // Devuelve null si no se encuentra el usuario
        }

        return user;
    } catch (error) {
        throw new Error(`Error al obtener el usuario: ${error.message}`);
    }
};

// Obtener todos los usuarios
const getAllUserController = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error(`Error al obtener los usuarios: ${error.message}`);
    }
};

// Actualizar un usuario por DNI
const updateUserByDniController = async (dni, userData) => {
    try {
        if (!dni) {
            throw new Error('El DNI es obligatorio para actualizar un usuario.');
        }

        const user = await User.findOne({ where: { dni } });
        if (!user) {
            return null; // Devuelve null si no se encuentra el usuario
        }

        // Si se pasa una contraseña, la hashea
        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }

        await user.update(userData);
        return user;
    } catch (error) {
        throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
};

// Eliminar un usuario por DNI
const deleteUserByDniController = async (dni) => {
    try {
        if (!dni) {
            throw new Error('El DNI es obligatorio para eliminar un usuario.');
        }

        const user = await User.findOne({ where: { dni } });
        if (!user) {
            return null; // Devuelve null si no se encuentra el usuario
        }

        await user.destroy();
        return user;
    } catch (error) {
        throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
};

module.exports = {
    createUserController,
    getUserByDniController,
    getAllUserController,
    updateUserByDniController,
    deleteUserByDniController,
};