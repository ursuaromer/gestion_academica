import React, { useState, useEffect } from "react";
import styles from "./Panel.module.css";
import Matricular from "./matricular/matricular";
import MatriculaList from "./MatriculaList/MatriculaList";
// import UserForm from "../PanelAdmin/usuarios/usuarios";
import Listado_docentes from "./docentes/listadocentes";
import Cursos from "./cursos/cursos";
import Cursosinicio from "./p_Estudios/Cursoinicio";
import RegisterForm from "../../Panel/PanelAdmin/usuarios/RegisterForm";
import useUserStore from "../../../Store/userStore";
import { useNavigate } from "react-router-dom";

const Panelg = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Modal de confirmación de cierre de sesión
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <div className={styles.inicio}>
            <h2>Bienvenido al Panel Administrativo</h2>
            <ul>
              <li>Matrículas</li>
              <li>Listado de docentes</li>
              <li>Cursos y programas de estudio</li>
              <li>Insertar notas</li>
            </ul>
            <p>Selecciona una opción en el menú lateral para comenzar.</p>
          </div>
        );
      case "matricular":
        return <Matricular />;
      case "listadocentes":
        return <Listado_docentes />;
      case "cursos":
        return <Cursos />;
      case "planEstudios":
        return <Cursosinicio />;
      case "MatriculaList":
        return <MatriculaList />;
      case "usuarios":
        return <RegisterForm />; // Se renderiza el formulario directamente
      default:
        return <div>Sección no encontrada</div>;
    }
  };

  const handleLogout = () => {
    navigate("/"); // Redirige al inicio de sesión
  };

  const openLogoutModal = () => setIsLogoutModalOpen(true); // Abre el modal de cierre de sesión
  const closeLogoutModal = () => setIsLogoutModalOpen(false); // Cierra el modal de cierre de sesión

  const confirmLogout = () => {
    handleLogout();
    closeLogoutModal();
  };

  useEffect(() => {
    if (!user) navigate("/"); // Redirige si no hay usuario logueado
  }, [user, navigate]);

  return (
    <div>
      {user && (
        <div className={styles.container}>
          <header className={styles.header}>
            <div
              className={styles.logo}
              onClick={() => setActiveSection("inicio")}
              style={{ cursor: "pointer" }}
            >
              <span role="img" aria-label="home">
                🏠
              </span>
            </div>
            <h1 className={styles.title}>
              PANEL ADMINISTRATIVO - USUARIO: {user.dni}
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
          </header>

          <div className={styles.main}>
            <aside className={styles.sidebar}>
              <button
                className={`${styles.button} ${
                  activeSection === "matricular" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("matricular")}
              >
                MATRICULAR
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "listadocentes" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("listadocentes")}
              >
                DOCENTES
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "cursos" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("cursos")}
              >
                PROGRAMA DE ESTUDIOS
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "planEstudios" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("planEstudios")}
              >
                CURSOS
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "MatriculaList" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("MatriculaList")}
              >
                LISTA DE MATRICULADOS
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "usuarios" ? styles.active : ""
                }`}
                onClick={() => setActiveSection("usuarios")}
              >
                REGISTRO DE USUARIOS
              </button>
              <button className={styles.button} onClick={openLogoutModal}>
                CERRAR SESIÓN
              </button>
            </aside>
            <section className={styles.content}>{renderSection()}</section>
          </div>
        </div>
      )}

      {/* Modal para confirmación de cierre de sesión */}
      {isLogoutModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>¿Estás seguro de que deseas cerrar sesión?</h3>
            <div className={styles.modalActions}>
              <button className={styles.confirmButton} onClick={confirmLogout}>
                Sí
              </button>
              <button className={styles.cancelButton} onClick={closeLogoutModal}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panelg;