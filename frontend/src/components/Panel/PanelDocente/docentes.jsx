import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Panel.module.css";
import useUserStore from "../../../Store/userStore";
import AgregarNotas from "../PanelDocente/agregarNotas/agregarNotas";

const Docentes = () => {
  const [activeSection, setActiveSection] = useState("matricular");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const confirmLogout = () => {
    handleLogout();
    setIsLogoutModalOpen(false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const renderSection = () => {
    switch (activeSection) {
      case "agregarNotas":
        return <AgregarNotas />;
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
            <h1 className={styles.title}>PANEL DOCENTE - USUARIO: {user.dni}</h1>
            <div className={styles.userLogo}>
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src="src/components/IMG/logo_suiza.png"
                alt="Logo del usuario"
              />
            </div>
          </header>
          <div className={styles.main}>
            <aside className={styles.sidebar}>
              <button
                className={`${styles.button} ${activeSection === "agregarNotas" ? styles.active : ""}`}
                onClick={() => setActiveSection("agregarNotas")}
              >
                AGREGAR NOTAS
              </button>

              <button className={styles.button} onClick={openLogoutModal}>
                CERRAR SESIÓN
              </button>
            </aside>
            <section className={styles.content}>{renderSection()}</section>
          </div>
        </div>
      )}

      {isLogoutModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>¿Estás seguro de que deseas cerrar sesión?</h3>
            <button className={styles.modalButton} onClick={confirmLogout}>
              Sí
            </button>
            <button className={styles.modalButton} onClick={closeLogoutModal}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Docentes;
