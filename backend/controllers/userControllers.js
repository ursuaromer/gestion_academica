const Usuario = require('../models/User');
const bcrypt = require('bcrypt');

// Crear un nuevo usuario
const createUserController = async ({ dni, nombre, apellido, contraseña, rol }) => {
    try {
        if (!dni || !nombre || !apellido || !contraseña || !rol) {
            throw new Error('Faltan datos requeridos para crear el usuario.');
        }

        // Verificar si el DNI ya existe
        const existingUser = await Usuario.findOne({ where: { dni } });
        if (existingUser) {
            throw new Error('El usuario con este DNI ya existe.');
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        // Crear el usuario
        const newUser = await Usuario.create({
            dni,
            nombre,
            apellido,
            contraseña: hashedPassword, 
            rol,
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

        const user = await Usuario.findOne({ where: { dni } });
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
        const users = await Usuario.findAll();
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

        const user = await Usuario.findOne({ where: { dni } });
        if (!user) {
            return null; // Devuelve null si no se encuentra el usuario
        }

        // Si se pasa una contraseña, la hashea
        if (userData.contraseña) {
            userData.contraseña = await bcrypt.hash(userData.contraseña, 10);
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

        const user = await Usuario.findOne({ where: { dni } });
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
