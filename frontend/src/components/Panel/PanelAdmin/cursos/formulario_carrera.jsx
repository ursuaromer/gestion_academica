import React, { useState } from 'react';
import axios from 'axios'; 
import styles from './formulario_carrera.module.css';

const CarreraForm = ({ onSuccess, onCancel }) => {

  const [formData, setFormData] = useState({ nombre: '', jefeArea: '' });
  const [loading, setLoading] = useState(false); 


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre, jefeArea } = formData;

    if (!nombre.trim() || !jefeArea.trim()) {
      alert('Por favor complete todos los campos.');
      return;
    }

    try {
      setLoading(true); 

      const response = await axios.post('http://localhost:3001/carreras', {
        nombre,
        jefe_area: jefeArea, 
      });

      alert('Carrera agregada con éxito.');

      if (onSuccess) onSuccess(response.data);
      setFormData({ nombre: '', jefeArea: '' });
    } catch (error) {
      console.error('Error al agregar carrera:', error?.response?.data || error.message);
      alert('Ocurrió un error al agregar la carrera. Intente nuevamente.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Agregar Nueva Carrera</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="nombre" className={styles.label}>Nombre de la Carrera</label>
        <input
          type="text"
          id="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Ejemplo: Ingeniería de Sistemas"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="jefeArea" className={styles.label}>Jefe de Área</label>
        <input
          type="text"
          id="jefeArea"
          value={formData.jefeArea}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Ejemplo: Juan Pérez"
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.addButton} disabled={loading}>
          {loading ? 'Guardando...' : 'Agregar'}
        </button>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={onCancel}
          disabled={loading}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default CarreraForm;
