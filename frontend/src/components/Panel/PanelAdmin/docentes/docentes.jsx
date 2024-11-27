import React, { useState } from "react";
import styles from "./docente.module.css";
import useDocenteStore from "../../../../Store/docenteStore";
const Docentes = ({ agregarDocente, handleRegresar }) => {
  const [formData, setFormData] = useState({
    codigo: "",
    nombre: "",
    apellido: "",
    email: "",
    especialidad: "",
    fechaContratacion: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.codigo.trim()) {
      newErrors.codigo = "Código es requerido";
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.codigo)) {
      newErrors.codigo = "Código debe ser alfanumérico";
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Nombre es requerido";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "Nombre solo debe contener letras";
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = "Apellido es requerido";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.apellido)) {
      newErrors.apellido = "Apellido solo debe contener letras";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email no es válido";
    }

    if (!formData.especialidad.trim()) {
      newErrors.especialidad = "Especialidad es requerida";
    }

    if (!formData.fechaContratacion) {
      newErrors.fechaContratacion = "Fecha de contratación es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      agregarDocente(formData);  // Pasa los datos del formulario al componente padre
      alert("Docente registrado exitosamente");
      setFormData({
        codigo: "",
        nombre: "",
        apellido: "",
        email: "",
        especialidad: "",
        fechaContratacion: "",
      });
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <button className={styles.regresarButton} onClick={handleRegresar}>
        ← Volver
        </button>
        <h2 className={styles.title}>Registrar Docente</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Código:</label>
          <input
            className={styles.input}
            type="text"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
          />
          {errors.codigo && <p className={styles.error}>{errors.codigo}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Nombre:</label>
          <input
            className={styles.input}
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Apellido:</label>
          <input
            className={styles.input}
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          {errors.apellido && <p className={styles.error}>{errors.apellido}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Especialidad:</label>
          <input
            className={styles.input}
            type="text"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
          />
          {errors.especialidad && (
            <p className={styles.error}>{errors.especialidad}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Fecha Contratación:</label>
          <input
            className={styles.input}
            type="date"
            name="fechaContratacion"
            value={formData.fechaContratacion}
            onChange={handleChange}
          />
          {errors.fechaContratacion && (
            <p className={styles.error}>{errors.fechaContratacion}</p>
          )}
        </div>
        <button className={styles.button} type="submit">
          Registrar Docente
        </button>
      </form>
    </div>
  );
};

export default Docentes;



