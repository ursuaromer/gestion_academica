const User = require('../models/User');
const bcrypt = require('bcrypt');

// Crear un nuevo usuario
const createUserController = async ({ dni, username, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await User.create({ dni, username, password: hashedPassword, role });
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener un usuario por DNI (en lugar de nombre de usuario)
const getUserByDniController = async (dni) => {
    try {
        const user = await User.findOne({
            where: { dni },  // Buscar por DNI
        });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener todos los usuarios (sin cambios)
const getAllUserController = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Actualizar un usuario por ID (sin cambios)
const updateUserByIdController = async (id, userData) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return null;
        }
        await user.update(userData);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Eliminar un usuario por ID (sin cambios)
const deleteUserByIdController = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return null;
        }
        await user.destroy();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createUserController,
    getAllUserController,
    updateUserByIdController,
    deleteUserByIdController,
    getUserByDniController  // Cambié esto aquí
};
    