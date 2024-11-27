import { useState } from "react"; 
// import axios from 'axios';
import useUserStore from "../../../../Store/userStore";
import styles from "./usuarios.module.css";

const UserForm = () => {
    const { addUser } = useUserStore();
    const [userData, setUsereData] = useState({
        dni: "", 
        password: "", 
        confirmPassword: "", // Nuevo campo para confirmar la contraseña
        role: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsereData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación para asegurarse de que las contraseñas coincidan
        if (userData.password !== userData.confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, intente de nuevo.");
            return;
        }

        addUser(userData);
        setUsereData({
            dni: "", 
            password: "", 
            confirmPassword: "", // Limpiar el campo de confirmación también
            role: ""
        });
        alert("Usuario agregado exitosamente");
    };

    return (
        <div className= {styles.formContainer}>
            <h1>Formulario de Usuarios</h1>
            <form onSubmit={handleSubmit}> 
                <div className={styles.formGroup}>
                    <label htmlFor="dni">DNI:</label>
                    <input
                        id="dni"
                        type="text"
                        placeholder="Ingrese DNI"
                        required
                        name="dni"
                        value={userData.dni}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        id="password"
                        type="password" // Cambiado a tipo "password" por seguridad
                        placeholder="Ingrese Contraseña"
                        required
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input
                        id="confirmPassword"
                        type="password" // Cambiado a tipo "password" por seguridad
                        placeholder="Confirme la Contraseña"
                        required
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="role">Rol:</label>
                    <select
                        id="role"
                        name="role"
                        value={userData.role}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccione Rol</option>
                        <option value="Admin">Admin</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Docente">Docente</option>
                    </select>
                </div>

                <button type="submit" className={styles.submitButton}>REGISTRAR</button>
            </form>
        </div>
    );
};

export default UserForm;
