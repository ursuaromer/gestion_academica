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
    
    // Validate Código (assuming it should be alphanumeric and not empty)
    if (!formData.codigo.trim()) {
      newErrors.codigo = 'Código es requerido';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.codigo)) {
      newErrors.codigo = 'Código debe ser alfanumérico';
    }

    // Validate Nombre y Apellido (no números, no caracteres especiales)
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

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email no es válido';
    }

    // Validate Especialidad
    if (!formData.especialidad.trim()) {
      newErrors.especialidad = 'Especialidad es requerida';
    }

    // Validate Fecha Contratacion
    if (!formData.fechaContratacion) {
      newErrors.fechaContratacion = 'Fecha de contratación es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar los datos (por ejemplo, a una API)
      console.log('Formulario válido', formData);
      alert('Docente registrado exitosamente');
      // Opcional: limpiar formulario después del envío
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
    // Aquí iría la lógica para mostrar/navegar a la lista de docentes
    console.log('Mostrar lista de docentes');
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>REGISTRAR DOCENTES</h2>
      <button 
        className={styles.button} 
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
          {errors.codigo && <p style={{color: 'red', fontSize: '0.8rem'}}>{errors.codigo}</p>}
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
          {errors.nombre && <p style={{color: 'red', fontSize: '0.8rem'}}>{errors.nombre}</p>}
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
          {errors.apellido && <p style={{color: 'red', fontSize: '0.8rem'}}>{errors.apellido}</p>}
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
          {errors.email && <p style={{color: 'red', fontSize: '0.8rem'}}>{errors.email}</p>}
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
          {errors.especialidad && <p style={{color: 'red', fontSize: '0.8rem'}}>{errors.especialidad}</p>}
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
          {errors.fechaContratacion && <p style={{color: 'red', fontSize: '0.8rem'}}>{errors.fechaContratacion}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Registrar Docente
        </button>
      </form>
    </div>
  );
};

export default Docentes;