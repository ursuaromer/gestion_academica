import React from 'react';
import PropTypes from 'prop-types';
import { CursoItem } from './Cursoitem';
import styles from '../Cursos.module.css';

export function CursosList({ cursos, onCursoClick }) {
  return (
    <div className={styles.cursosList}>
      {cursos.map((curso) => (
        <CursoItem
          key={curso}
          curso={curso}
          onCursoClick={onCursoClick}
        />
      ))}
    </div>
  );
}

CursosList.propTypes = {
  cursos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCursoClick: PropTypes.func.isRequired
};