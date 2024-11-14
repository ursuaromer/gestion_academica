import { useState } from "react";
import axios from 'axios'
import useUserStore from "../../Store/userStore";

const UserForm = ()=>{
    const {addUser} = useUserStore()
    const [usertData, setUserData] = useState({
        username:"",
        password:"" ,
        role:"Admin"
    })

    console.log(usertData);

    const handleInputChange = (e)=>{
        const  {name, value} = e.target;
        setUserData({
            ...usertData,
            [name]:value
        })

    }

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        addUser(usertData)
        setUserData({
            firstName:"",
            lastName:"",
            role:"Admin"
        })
        alert("Eres todo un fracaso")
    }

    

    return(
        <div>
            <h1>Registrar Usuario</h1>
            <form  onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter username"
                  required
                  name="username"
                  value={usertData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  required
                  name="password"
                  value={usertData.password}
                  onChange={handleInputChange}
                />
                <select
                    name="role"
                    value={usertData.role}
                    onChange={handleInputChange}
                    >
                    <option value="Admin">Admin</option>
                    <option value="Alumno">Alumno</option>
                    <option value="Maestro">Maestro</option>
                    </select>
                <button>Save</button>
            </form>
        </div>
    )
}

export default  UserForm;