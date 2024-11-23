import { create } from 'zustand';
import axios from 'axios';

const useCourseStore = create((set) => ({
    course: [],
    addCourse: async (course) => {
        try {
            const response = await axios.post('http://localhost:3001/course', course);
            set((state) => ({ courses: [...state.courses, response.data] }));
        } catch (error) {
            console.log('Error al agregar curso:', error.message);
        }
    },
    fetchCourses: async () => {
        try {
            const response = await axios.get('http://localhost:3001/course');
            set({ courses: response.data });
        } catch (error) {
            console.log('Error al obtener curso', error.message);
        }
    },
    deleteCourse: async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/course/${id}`);
            console.log('Curso borrado:', response.data);
            set((state) => ({ courses: state.courses.filter((course) => course.id !== id) }));
        } catch (error) {
            console.log('Error deleting course:', error.message);
        }
    },
    updateCourse: async (id, updatedData) => { 
        try {
            const response = await axios.put(`http://localhost:3001/course/${id}`, updatedData);
            console.log('Curso actualizado:', response.data);
            set((state) => ({ courses: state.students.map((course) => course.id === id ? { ...course, ...response.data } : course) }));
        } catch (error) {
            console.log('Error al actualizar curso:', error.message);
        }
    }
}));

export default useCourseStore;