import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Cursos.module.css';

export function CursoItem({ curso, onCursoClick }) {
  const ciclos = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.cursoItem}>
      <h3 className={styles.cursoTitle}>{curso}</h3>
      <div className={styles.ciclosGrid}>
        {ciclos.map((ciclo) => (
          <button
            key={ciclo}
            className={styles.cicloButton}
            onClick={() => onCursoClick(curso, ciclo)}
          >
            Ciclo {ciclo}
          </button>
        ))}
      </div>
    </div>
  );
}

CursoItem.propTypes = {
  curso: PropTypes.string.isRequired,
  onCursoClick: PropTypes.func.isRequired
};