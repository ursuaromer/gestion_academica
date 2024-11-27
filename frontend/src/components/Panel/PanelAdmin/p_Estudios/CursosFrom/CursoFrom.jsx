import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../Cursos.module.css';

export function CursoForm({ onAddCurso, onCancel }) {
  const [newCurso, setNewCurso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCurso.trim()) {
      onAddCurso(newCurso.trim());
      setNewCurso('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="curso" className={styles.label}>
          Nombre del Curso:
        </label>
        <input
          type="text"
          id="curso"
          value={newCurso}
          onChange={(e) => setNewCurso(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formButtons}>
        <button type="submit" className={styles.submitButton}>
          Agregar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

CursoForm.propTypes = {
  onAddCurso: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};