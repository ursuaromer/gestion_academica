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
import React, { useState } from "react";
import styles from "./Panel.module.css";
import useUserStore from "../../../Store/userStore";

const Alumnos = () => {
  const [activeSection, setActiveSection] = useState("matricular");


  const user = useUserStore((state)=> state.user) //accedemos la estado global

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
          <h1 className={styles.title}>PANEL ESTUDIANTE- USUARIO: {user.dni}</h1>
          <div className={styles.userLogo}>
            <img  style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="src\components\IMG\logo_suiza.png" alt="Logo del usuario" />
          </div>
        </header>
        <div className={styles.main}>
          <aside className={styles.sidebar}>
      
            <button
              className={`${styles.button} ${
                activeSection === "planEstudios" ? styles.active : ""
              }`}
              onClick={() => setActiveSection("planEstudios")}
            >
              VER NOTAS
            </button>
          
          </aside>
          <section className={styles.content}>{renderSection()}</section>
        </div>
      </div>
        
      )}
    </div>
    
  );
};

export default Alumnos;
