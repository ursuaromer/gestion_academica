import React from 'react';
import PropTypes from 'prop-types';
import { DetalleCard } from './DetallCard';
import styles from '../Cursos.module.css';

export function CursosDelCiclo({ curso, ciclo, onBack }) {
  const detallesCurso = [
    { id: 1, nombre: 'Teoría', creditos: 4, horas: 6 },
    { id: 2, nombre: 'Práctica', creditos: 3, horas: 4 },
    { id: 3, nombre: 'Laboratorio', creditos: 5, horas: 8 },
  ];

  return (
    <div className={styles.cursosContainer}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          ← Volver
        </button>
        <h2 className={styles.cursosTitle}>
          {curso} - Ciclo {ciclo}
        </h2>
      </div>
      <div className={styles.cursosGrid}>
        {detallesCurso.map((detalle) => (
          <DetalleCard key={detalle.id} detalle={detalle} />
        ))}
      </div>
    </div>
  );
}

CursosDelCiclo.propTypes = {
  curso: PropTypes.string.isRequired,
  ciclo: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired
};