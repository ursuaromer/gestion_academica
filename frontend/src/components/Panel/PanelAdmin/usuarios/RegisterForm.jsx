import React, { useState } from "react";
import useUserStore from "../../../../Store/userStore"; // Importar el store de Zustand
import styles from "./RegisterModal.module.css";

const RegisterModal = () => {
  const { registerUser } = useUserStore(); // Obtener la función del store
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    contraseña: "",
    rol: "estudiante", // Rol por defecto
  });
  const [error, setError] = useState(null); // Manejo de errores
  const [loading, setLoading] = useState(false); // Indicador de carga

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Resetear errores

    try {
      await registerUser(
        formData.nombre,
        formData.apellido,
        formData.dni,
        formData.contraseña,
        formData.rol
      );
      alert("Usuario registrado con éxito");

      // Resetear el formulario solo si es necesario
      setFormData({
        nombre: "",
        apellido: "",
        dni: "",
        contraseña: "",
        rol: "estudiante",
      });
    } catch (err) {
      setError(err.message); // Manejar errores
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Registrar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>DNI:</label>
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
              maxLength={8}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Rol:</label>
            <select name="rol" value={formData.rol} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="docente">Docente</option>
              <option value="estudiante">Estudiante</option>
            </select>
          </div>

          {error && <div style={{ color: "red" }}>{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Registrando..." : "Registrar Usuario"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
