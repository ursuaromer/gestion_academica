
// sections/Docentes.jsx
import React from 'react';
import styles from '../matricular/Sections.module.css';

const Docentes = () => {
  return (
    <div className={styles.section}>
    <h2>REGISTRAR DOCENTES</h2>
    <button>Lista de Docentes</button>
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label>Nombre:</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Apellido:</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Apellido:</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Apellido:</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Apellido:</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Apellido:</label>
        <input type="text" />
      </div>
      <div className={styles.formGroup}>
        <label>Apellido:</label>
        <input type="text" />
      </div>
      {/* Agrega más campos según necesites */}
    </form>
  </div>
  );
};

export default Docentes;