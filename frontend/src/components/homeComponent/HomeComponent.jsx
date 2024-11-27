import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './HomeComponent.module.css';
import logoSuiza from "../IMG/Logo_Suiza.png";
import useUserStore from '../../Store/userStore';  // Importa el estado global

const HomeComponent = () => {
  const [formData, setFormData] = useState({

    dni: "",
    contraseña: "",
    // role: "",
  });
  const [showModal, setShowModal] = useState(false);  // Estado para mostrar el modal
  const loginUser = useUserStore((state) => state.loginUser);
  const user = useUserStore((state) => state.user);  // Accede a la información del usuario
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { dni, contraseña } = formData;
      const user = await loginUser(dni, contraseña);  // Solo enviamos DNI y contraseña

      if (user) {
        console.log("Usuario recibido:", user);
        console.log("Rol del usuario:", user.role);

        // Redirigir según el rol recibido
        if (user.rol === "admin") {
          navigate("/panel");
        } else if (user.rol === "docente") {
          navigate("/panel-docente");
        } else if (user.rol=== "estudiante") {
          navigate("/panel-alumno");
        } else {
          alert("Rol desconocido");
        }
      }
    } catch (error) {
      alert(error.message || "Error al iniciar sesión...");
    }
  };

  // Abre el modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.pantallaCompletaContainer}>
      {/* Mostrar el usuario que ha iniciado sesión */}
      {user && (
        <div>
          {/* <p>Bienvenido, {user.username} ({user.dni})</p>  Muestra el nombre y DNI del usuario */}
        </div>
      )}


      {/* Botón en la parte superior derecha */}
      <button className={styles.loginButton} onClick={toggleModal}>
        Iniciar Sesión
      </button>

      <div>
        <img src={logoSuiza} alt="Logo" className={styles.logoSuizaIz} />
      </div>
      <div>
        <img src={logoSuiza} alt="Logo" className={styles.logoSuizaDer} />
      </div>

      {/* Encabezado principal */}
      <div className={styles.header}>
        <h1 className={styles.title}>BIENVENIDOS AL SISTEMA DEL INSTITUTO</h1>
        <p className={styles.subtitle}>
          Gestiona tus actividades académicas de manera eficiente y organizada.
        </p>
      </div>

      {/* Contenido adicional */}
      <div className={styles.content}>
        <section className={styles.infoSection}>
          <h2>¿Qué encontrarás aquí?</h2>
          <p>
            Nuestro sistema te permite acceder a una plataforma integral para la
            gestión de estudiantes, docentes y personal administrativo.
          </p>
        </section>

        <section className={styles.featuresSection}>
          <h2>Funciones Principales</h2>
          <ul>
            <li>Matrículas</li>
            <li>Gestión de notas</li>
          </ul>
        </section>
      </div>

      {/* Descripción del sistema */}
      <p className={styles.description}>
        Este sistema está diseñado para facilitar la gestión académica de
        los administrativos, docentes y estudiantes. ¡Bienvenido a nuestra plataforma!
      </p>

      {/* Modal para iniciar sesión */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            {/* Sección izquierda del modal */}
            <div className={styles.modalLeft}>
              <h2>SISTEMA DE GESTIÓN ACADÉMICA - IESTP "SUIZA"</h2>
              <p>
                Al sistema sólo pueden ingresar para reportar información el
                personal jerárquico y la plana docente. Los estudiantes pueden
                ingresar opcionalmente sólo para consultar información que ha sido reportada.
              </p>
              <div >
                <img src={logoSuiza} alt="Logo" className={styles.logoSuiza} />
              </div>
            </div>

            {/* Sección derecha del modal */}
            <div className={styles.modalRight}>
              <h2>Iniciar Sesión</h2>
              <p>SISGA</p>
              <form onSubmit={handleLogin}>
                <label>
                  DNI:
                  <input
                    type="text"
                    name="dni"
                    placeholder="Ingresa tu DNI"
                    value={formData.dni}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Contraseña:
                  <input
                    type="password"
                    name="contraseña"
                    placeholder="Ingresa tu contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button type="submit" className={styles.submitButton}>
                  Iniciar Sesión
                </button>
              </form>
              <button className={styles.closeButton} onClick={toggleModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
