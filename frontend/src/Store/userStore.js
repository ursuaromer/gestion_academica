import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null, // Almacenar la información del usuario
      // Función para iniciar sesión
      loginUser: async (dni, contraseña, rol) => {
        const response = await fetch('http://localhost:3001/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dni, contraseña, rol }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Error al iniciar sesión');
        }

        set({ user: data }); // Guardar la información del usuario
        return data;
      },
      // Función para registrar un nuevo usuario
      registerUser: async (nombre, apellido, dni, contraseña, rol) => {
        const response = await fetch('http://localhost:3001/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, apellido, dni, contraseña, rol }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Error al registrar el usuario');
        }

        set({ user: data }); // Guardar la información del usuario registrado
        return data;
      },
      // Función para cerrar sesión
      logoutUser: () => set({ user: null }),
      // Limpiar datos del usuario
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // Nombre del almacenamiento (clave en localStorage o sessionStorage)
      getStorage: () => localStorage, // Puedes cambiar esto a sessionStorage si lo prefieres
    }
  )
);

export default useUserStore;
