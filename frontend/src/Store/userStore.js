import { create } from "zustand";

const useUserStore = create((set) => ({
    user: null,  // Almacenar la información del usuario
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
  
      set({ user: data });  // Guardar la información del usuario
      return data;
    },
    logoutUser: () => set({ user: null }),  // Función para cerrar sesión
  }));

export default useUserStore;
