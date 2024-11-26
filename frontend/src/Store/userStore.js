import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null, // Almacenar la información del usuario
      loginUser: async (dni, password, role) => {
        const response = await fetch('http://localhost:3001/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dni, password, role }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Error al iniciar sesión');
        }

        set({ user: data }); // Guardar la información del usuario
        return data;
      },
      logoutUser: () => set({ user: null }), // Función para cerrar sesión
    }),
    {
      name: 'user-storage', // Nombre del almacenamiento (clave en localStorage o sessionStorage)
      getStorage: () => localStorage, // Puedes cambiar esto a sessionStorage si lo prefieres
    }
  )
);

export default useUserStore;
