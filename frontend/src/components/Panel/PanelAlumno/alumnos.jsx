import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import styles from "./Panel.module.css";
import useUserStore from "../../../Store/userStore";
import VerNotas from "./verNotas/vernotas";
import ConsultarMatricula from "./consultarMatricula/consultarMatricula";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClickOutside}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Alumnos = () => {
  const [isModalOpen, setModalOpen] = useState({
    verNotas: false,
    consultarMatricula: false,
  });

  const user = useUserStore((state) => state.user); // Estado global del usuario
  const setUser = useUserStore((state) => state.setUser); // Método para actualizar el estado de usuario

  const navigate = useNavigate(); // Hook de navegación

  const toggleModal = (modalName) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const sampleNotasData = [
    { course: "Matemáticas", grade: 18, ciclo: "1", carrera: "Ingeniería" },
    { course: "Física", grade: 16, ciclo: "1", carrera: "Ingeniería" },
    { course: "Programación", grade: 20, ciclo: "1", carrera: "Ingeniería" },
  ];

  const handleLogout = () => {
    // Limpiar el estado del usuario al hacer logout
    setUser(null);
    alert("Sesión cerrada exitosamente");
    // Redirigir a la ruta principal
    navigate("/"); // Redirige al usuario a la ruta principal ("/")
  };

  return (
    <div>
      {user && (
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo} onClick={() => alert("Ir al inicio")}>
              🏠
            </div>
            <h1 className={styles.title}>
              PANEL ESTUDIANTE - USUARIO: {user.dni}
            </h1>
            <div className={styles.userLogo}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                src="src/components/IMG/logo_suiza.png"
                alt="Logo del usuario"
              />
            </div>
            {/* Botón de cierre de sesión */}
            <button className={styles.logoutButton} onClick={handleLogout}>
              Cerrar sesión
            </button>
          </header>
          <div className={styles.main}>
            <aside className={styles.sidebar}>
              <button
                className={`${styles.button} ${isModalOpen.verNotas ? styles.active : ""}`}
                onClick={() => toggleModal("verNotas")}
              >
                VER NOTAS
              </button>
              <button
                className={`${styles.button} ${isModalOpen.consultarMatricula ? styles.active : ""}`}
                onClick={() => toggleModal("consultarMatricula")}
              >
                CONSULTAR MATRÍCULA
              </button>
            </aside>
            <div className={styles.content}>
              <h2>Bienvenido al Panel Estudiante</h2>
              <p>Selecciona una opción en el menú lateral.</p>
            </div>
          </div>

          {/* Modal para Ver Notas */}
          <Modal
            isOpen={isModalOpen.verNotas}
            onClose={() => toggleModal("verNotas")}
          >
            <VerNotas
              isOpen={isModalOpen.verNotas}
              onClose={() => toggleModal("verNotas")}
              data={sampleNotasData}
            />
          </Modal>

          {/* Modal para Consultar Matrícula */}
          <Modal
            isOpen={isModalOpen.consultarMatricula}
            onClose={() => toggleModal("consultarMatricula")}
          >
            <ConsultarMatricula />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Alumnos;
