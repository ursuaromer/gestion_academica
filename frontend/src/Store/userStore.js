import { create } from 'zustand';

const BASE_URL = "http://localhost:3001/User"; // Cambia según tu API

const useUserStore = create((set) => ({
    users: [],
    user: null,
    error: null,
    loading: false,
     // Función login
     login: async (dni, password) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ dni, password }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al iniciar sesión");
            }

            // Si el login es exitoso
            set({ user: data, isLoggedIn: true, loading: false });
        } catch (error) {
            set({ error: error.message, isLoggedIn: false, loading: false });
        }
    },

    logout: () => {
        set({ user: null, isLoggedIn: false });
    },
    // Fetch todos los usuarios
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            set({ users: data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    // Obtener un usuario por DNI
    fetchUserByDni: async (dni) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${BASE_URL}/${dni}`);
            if (!response.ok) {
                throw new Error("Usuario no encontrado");
            }
            const data = await response.json();
            set({ user: data, loading: false });
        } catch (err) {
            set({ error: err.message, user: null, loading: false });
        }
    },

    // Crear un nuevo usuario
    createUser: async ({ dni, password, role }) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ dni, password, role }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Error al crear el usuario");
            }
            set((state) => ({ users: [...state.users, data], loading: false }));
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    // Actualizar un usuario por DNI
    updateUser: async (dni, updates) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${BASE_URL}/${dni}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updates),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Error al actualizar el usuario");
            }
            set((state) => ({
                users: state.users.map((user) =>
                    user.dni === dni ? { ...user, ...data } : user
                ),
                loading: false,
            }));
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    // Eliminar un usuario por DNI
    deleteUser: async (dni) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${BASE_URL}/${dni}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Error al eliminar el usuario");
            }
            set((state) => ({
                users: state.users.filter((user) => user.dni !== dni),
                loading: false,
            }));
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },
}));

export default useUserStore;
