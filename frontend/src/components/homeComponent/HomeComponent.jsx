import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeComponent.css";
import logoSuiza from "../IMG/Logo_Suiza.png";
import useUserStore from '../../Store/userStore';  // Importa el estado global

const HomeComponent = () => {
  const [formData, setFormData] = useState({

    dni: "",
    password: "",
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
      const { dni, password } = formData;
      const user = await loginUser(dni, password);  // Solo enviamos DNI y contraseña

      if (user) {
        console.log("Usuario recibido:", user);
        console.log("Rol del usuario:", user.role);

        // Redirigir según el rol recibido
        if (user.role === "admin") {
          navigate("/panel");
        } else if (user.role === "docente") {
          navigate("/panel-docente");
        } else if (user.role === "estudiante") {
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
    <div className="pantallaCompleta-container">
      {/* Mostrar el usuario que ha iniciado sesión */}
      {user && (
        <div>
          <p>Bienvenido, {user.username} ({user.dni})</p>  {/* Muestra el nombre y DNI del usuario */}
        </div>
      )}


      {/* Botón en la parte superior derecha */}
      <button className="login-button" onClick={toggleModal}>
        Iniciar Sesión
      </button>

      <div>
        <img src={logoSuiza} alt="Logo" className="logoSuizaIz" />
      </div>
      <div>
        <img src={logoSuiza} alt="Logo" className="logoSuizaDer" />
      </div>

      {/* Encabezado principal */}
      <div className="header">
        <h1 className="title">BIENVENIDOS AL SISTEMA DEL INSTITUTO</h1>
        <p className="subtitle">
          Gestiona tus actividades académicas de manera eficiente y organizada.
        </p>
      </div>

      {/* Contenido adicional */}
      <div className="content">
        <section className="info-section">
          <h2>¿Qué encontrarás aquí?</h2>
          <p>
            Nuestro sistema te permite acceder a una plataforma integral para la
            gestión de estudiantes, docentes y personal administrativo.
          </p>
        </section>

        <section className="features-section">
          <h2>Funciones Principales</h2>
          <ul>
            <li>Matrículas</li>
            <li>Gestión de notas</li>
            <li>Comunicación con docentes, etc</li>
          </ul>
        </section>
      </div>

      {/* Descripción del sistema */}
      <p className="description">
        Este sistema está diseñado para facilitar la gestión académica de
        los administrativos, docentes y estudiantes. ¡Bienvenido a nuestra plataforma!
      </p>

      {/* Modal para iniciar sesión */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            {/* Sección izquierda del modal */}
            <div className="modal-left">
              <h2>SISTEMA DE GESTIÓN ACADÉMICA - IESTP "SUIZA"</h2>
              <p>
                Al sistema sólo pueden ingresar para reportar información el
                personal jerárquico y la plana docente. Los estudiantes pueden
                ingresar opcionalmente sólo para consultar información que ha sido reportada.
              </p>
              <div >
                <img src={logoSuiza} alt="Logo" className="logoSuiza" />
              </div>
            </div>

            {/* Sección derecha del modal */}
            <div className="modal-right">
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
                {/* <label>
                  Usuario:
                  <input
                    type="text"
                    name="username"
                    placeholder="Ingresa tu usuario"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </label> */}
                <label>
                  Contraseña:
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
                {/* <label>
                  Tipo de Usuario:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona tu rol</option>
                    <option value="admin">ADMIN</option>
                    <option value="docente">DOCENTE</option>
                    <option value="estudiante">ESTUDIANTE</option>
                  </select>
                </label> */}
                <button type="submit" className="submit-button">
                  Iniciar Sesión
                </button>
              </form>
              <button className="close-button" onClick={toggleModal}>
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
