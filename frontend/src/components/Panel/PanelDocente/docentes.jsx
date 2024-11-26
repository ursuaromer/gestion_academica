// import React from 'react'
// import useUserStore from '../../../Store/userStore';
// const Alumnos = () => {
//   const user = useUserStore((state)=> state.user);  // Accede al estado global

//   return (
//     <div>
//     {user && (
//       <div>
//         <h1>Panel {user.role}</h1>
//         <h2>Bienvenido, {user.username} ({user.dni}) {user.role}</h2>  {/* Muestra el nombre y DNI del usuario */}
//       </div>
//     )}
//   </div>
//   )
// }

// export default Alumnos
import React, { useState, useEffect } from "react"; // Asegúrate de importar useEffect
import { useNavigate } from "react-router-dom";
import styles from "./Panel.module.css";
import useUserStore from "../../../Store/userStore";

const Docentes = () => {
  const [activeSection, setActiveSection] = useState("matricular");
  const user = useUserStore((state) => state.user); // Accedemos al estado global
  const logoutUser = useUserStore((state) => state.logoutUser); // Función para cerrar sesión
  const navigate = useNavigate(); // Hook para redirigir

  const handleLogout = () => {
    logoutUser(); // Llama a la función de logout
    navigate("/"); // Redirige al inicio ("/")
  };

  // useEffect agregado para redirigir al inicio si no hay un usuario
  useEffect(() => {
    if (!user) {
      navigate("/"); // Si no hay usuario logueado, redirige al inicio
    }
  }, [user, navigate]);

  const renderSection = () => {
    switch (activeSection) {
      case "agregarNotas":
        return <div>Agregar Notas</div>;
      case "editarNotas":
        return <div>Editar Notas</div>;
      case "verNotas":
        return <div>Ver Notas</div>;
      default:
        return <div>Selecciona una opción</div>;
    }
  };

  return (
    <div>
      {user && (
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <span role="img" aria-label="home">
                🏠
              </span>
            </div>
            <h1 className={styles.title}>
              PANEL DOCENTE - USUARIO: {user.dni}
            </h1>
            <div className={styles.userLogo}>
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src="src/components/IMG/logo_suiza.png" // Asegúrate de que la ruta de la imagen es correcta
                alt="Logo del usuario"
              />
            </div>
          </header>
          <div className={styles.main}>
            <aside className={styles.sidebar}>
              <button
                className={`${styles.button} ${
                  activeSection === "agregarNotas" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("agregarNotas")}
              >
                AGREGAR NOTAS
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "editarNotas" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("editarNotas")}
              >
                EDITAR NOTAS
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "verNotas" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("verNotas")}
              >
                VER NOTAS
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "cerrarSesion" ? styles.active : ""
                }`}
                onClick={handleLogout}
              >
                CERRAR SESION
              </button>
            </aside>
            <section className={styles.content}>{renderSection()}</section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Docentes;
