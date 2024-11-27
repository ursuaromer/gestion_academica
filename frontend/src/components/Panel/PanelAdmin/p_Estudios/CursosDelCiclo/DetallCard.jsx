import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Cursos.module.css';

export function DetalleCard({ detalle }) {
  return (
    <div className={styles.cursoCard}>
      <h3 className={styles.cursoNombre}>{detalle.nombre}</h3>
      <div className={styles.cursoDetails}>
        <p>Créditos: {detalle.creditos}</p>
        <p>Horas: {detalle.horas}</p>
      </div>
    </div>
  );
}

DetalleCard.propTypes = {
  detalle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    creditos: PropTypes.number.isRequired,
    horas: PropTypes.number.isRequired
  }).isRequired
};