import { create } from 'zustand';
import axios from 'axios';

const useCarrerasStore = create((set) => ({
    // Estado inicial
    carreras: [],

    // Agregar una nueva carrera
    addCarrera: async (carrera) => {
        try {
            const response = await axios.post('http://localhost:3001/carreras', {
                nombre: carrera.nombre,
                jefe_area: carrera.jefe_area,
            });
            set((state) => ({ carreras: [...state.carreras, response.data] }));
        } catch (error) {
            console.error('Error al agregar carrera:', error?.response?.data || error.message);
        }
    },

    // Obtener todas las carreras
    fetchCarreras: async () => {
        try {
            const response = await axios.get('http://localhost:3001/carreras');
            set({ carreras: response.data });
        } catch (error) {
            console.error('Error al obtener carreras:', error?.response?.data || error.message);
        }
    },

    // Eliminar una carrera
    deleteCarrera: async (id) => {
        try {
            await axios.delete(`http://localhost:3001/carreras/${id}`);
            set((state) => ({ carreras: state.carreras.filter((carrera) => carrera.id !== id) }));
        } catch (error) {
            console.error('Error al eliminar carrera:', error?.response?.data || error.message);
        }
    },

    // Actualizar una carrera
    updateCarrera: async (id, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:3001/carreras/${id}`, {
                nombre: updatedData.nombre,
                jefe_area: updatedData.jefe_area,
            });
            set((state) => ({
                carreras: state.carreras.map((carrera) =>
                    carrera.id === id ? { ...carrera, ...response.data } : carrera
                ),
            }));
        } catch (error) {
            console.error('Error al actualizar carrera:', error?.response?.data || error.message);
        }
    },
}));

export default useCarrerasStore;
