import { create } from 'zustand';
import axios from 'axios';

const useDocenteStore = create((set) => ({
  docentes: [],
  
  // Agregar un nuevo docente
  addDocente: async (docente) => {
    try {
      const response = await axios.post('http://localhost:3001/docente', docente);
      set((state) => ({
        docentes: [...state.docentes, response.data],
      })); // Actualiza el estado con el nuevo docente
    } catch (error) {
      console.log("Error adding docente", error.message);
    }
  },
  
  // Obtener todos los docentes
  fetchDocentes: async () => {
    try {
      const response = await axios.get('http://localhost:3001/docente');
      set({ docentes: response.data });
    } catch (error) {
      console.log("Error fetching docentes", error.message);
    }
  },
  
  // Obtener un docente por ID
  fetchDocenteById: async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/docente/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error fetching docente by ID", error.message);
    }
  },
  
  // Actualizar un docente por ID
  updateDocente: async (id, docenteData) => {
    try {
      const response = await axios.put(`http://localhost:3001/docente/${id}`, docenteData);
      set((state) => ({
        docentes: state.docentes.map((docente) =>
          docente._id === id ? response.data : docente
        ),
      })); // Actualiza el docente modificado en el estado
    } catch (error) {
      console.log("Error updating docente", error.message);
    }
  },
  
  // Eliminar un docente por ID
  deleteDocente: async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/docente/${id}`);
      console.log("Docente deleted:", response.data);
      set((state) => ({
        docentes: state.docentes.filter((docente) => docente._id !== id),
      })); // Elimina el docente del estado
    } catch (error) {
      console.log("Error deleting docente:", error.message);
    }
  },
}));

export default useDocenteStore;
