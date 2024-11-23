import React, { useState } from 'react';
import styles from './docente.module.css';

const Docentes = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    apellido: '',
    email: '',
    especialidad: '',
    fechaContratacion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.codigo.trim()) {
      newErrors.codigo = 'Código es requerido';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.codigo)) {
      newErrors.codigo = 'Código debe ser alfanumérico';
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Nombre es requerido';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
      newErrors.nombre = 'Nombre solo debe contener letras';
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'Apellido es requerido';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.apellido)) {
      newErrors.apellido = 'Apellido solo debe contener letras';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email no es válido';
    }

    if (!formData.especialidad.trim()) {
      newErrors.especialidad = 'Especialidad es requerida';
    }

    if (!formData.fechaContratacion) {
      newErrors.fechaContratacion = 'Fecha de contratación es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario válido', formData);
      alert('Docente registrado exitosamente');
      setFormData({
        codigo: '',
        nombre: '',
        apellido: '',
        email: '',
        especialidad: '',
        fechaContratacion: ''
      });
    } else {
      console.log('Hay errores en el formulario');
    }
  };

  const handleListaDocentes = () => {
    console.log('Mostrar lista de docentes');
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>REGISTRAR DOCENTES</h2>
      <button
        className={styles.button1}
        onClick={handleListaDocentes}
      >
        Lista de Docentes
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>CODIGO:</label>
          <input
            className={styles.input}
            type="text"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
          />
          {errors.codigo && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.codigo}</p>}
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
          {errors.nombre && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.nombre}</p>}
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
          {errors.apellido && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.apellido}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>EMAIL:</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>ESPECIALIDAD:</label>
          <input
            className={styles.input}
            type="text"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
          />
          {errors.especialidad && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.especialidad}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>FECHA CONTRATACION:</label>
          <input
            className={styles.input}
            type="date"
            name="fechaContratacion"
            value={formData.fechaContratacion}
            onChange={handleChange}
          />
          {errors.fechaContratacion && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.fechaContratacion}</p>}
        </div>
        <button className={styles.button} type="submit">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
              </svg>
            </div>
          </div>
          <span>Registrar Docente</span>
        </button>
      </form>
    </div>
  );
};

export default Docentes;
