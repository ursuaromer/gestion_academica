import {create} from 'zustand'
import axios from 'axios'

const useMatriculaStore = create((set)=>({
    matriculas: [],
    addMatricula: async(matricula)=>{
        try {
            const response = await axios.post('http://localhost:3001/matricula', matricula)
            set((state)=>({matriculas: [...state.matriculas, response.data]})) // update the state with the new student
        } catch (error) {
            console.log("Error adding user", error.message);
            
        }
    },
    fetchMatriculas:  async ()=>{
        try {
            const response =  await axios.get('http://localhost:3001/matricula')
            set({matriculas:  response.data})

        } catch (error) {
            console.log("Error fetching matriculas", error.message)
        }
    },
    deleteMatricula: async (id) => {
        try {
            const  response = await axios.delete(`http://localhost:3001/matricula/${id}`)
            console.log("Matricula deleted:",response.data)
            set((state)=>(
                {matriculas: state.matriculas.filter(matricula=>matricula.id !== id)}
            ))

        } catch (error) {
            console.log("Error deleting matricula:",  error.message)

        }
    }


}))
export default useMatriculaStore;