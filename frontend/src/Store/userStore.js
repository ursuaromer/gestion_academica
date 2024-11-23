import {create} from 'zustand'
import axios from 'axios'

const useUserStore = create((set) =>({
    users: [],
    addUser: async (user)=>{
        try {
            const response = await axios.post(`http://localhost:3001/User`, user)
            set ((state)=>({users: [...state.users, response.data]})) 
        } catch (error) {
            console.log('Error adding user', error.message);
        }
    },

    fetchUser: async ()=>{
        try {
            const response = await axios.get(`http://localhost:3001/User`)
            set({users: response.data})
        } catch (error) {
            console.log('Error fetching users', error. message)
        }        
    },
    deleteUser: async (id)=>{
        try {
            const response = await axios.delete(`http://localhost:3001/User/${id}`)
            console.log('User deleted: ', response.data)
            set((state)=>(
                {users: state.users.filter(user=>user.id !== id)}
            ))
        } catch (error) {
            console.log('Error deleting user: ', error.message)
            
        }
    }
}))

export default useUserStore;