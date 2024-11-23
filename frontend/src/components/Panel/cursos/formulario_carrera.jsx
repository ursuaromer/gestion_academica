import React, { useState } from 'react';
import styles from './cursos.module.css';

const CarreraForm = ({ onAddCarrera, onCancel }) => {
  const [newCarrera, setNewCarrera] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCarrera.trim()) {
      onAddCarrera(newCarrera.trim());
      setNewCarrera('');
    }
  };

  return (
    <div className={styles.section}>
      <h2>Agregar Nueva Carrera</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="carrera">Nombre de la Carrera:</label>
          <input
            id="carrera"
            type="text"
            className={styles.formInput}
            value={newCarrera}
            onChange={(e) => setNewCarrera(e.target.value)}
            placeholder="Ingrese el nombre de la carrera"
            required
          />
        </div>
        <div className={styles.formButtons}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!newCarrera.trim()}
          >
            Guardar Carrera
          </button>
          <button 
            type="button" 
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarreraForm;