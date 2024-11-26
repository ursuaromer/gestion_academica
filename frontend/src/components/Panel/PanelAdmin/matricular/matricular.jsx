// sections/Matricular.jsx
import React from 'react';
import styles from './Sections.module.css';

const Matricular = () => {
  return (
    <div className={styles.section}>
      <h2>Matricular Estudiantes</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nombre:</label>
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

export default Matricular;