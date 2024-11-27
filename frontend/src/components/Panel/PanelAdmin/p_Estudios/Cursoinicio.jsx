import React from 'react';
import { CursosList } from './CursosList/CursosList';
import { CursoForm } from './CursosFrom/CursoFrom';
import { CursosDelCiclo } from './CursosDelCiclo/CursosDelCiclo';
import { useCursos } from './hooks/useCursos';
import styles from './Cursos.module.css';

export function Cursosinicio() {
  const {
    cursos,
    showForm,
    selectedCurso,
    selectedCiclo,
    handleAddCurso,
    handleCursoClick,
    handleBack,
    setShowForm
  } = useCursos();

  if (selectedCurso && selectedCiclo) {
    return (
      <CursosDelCiclo 
        curso={selectedCurso}
        ciclo={selectedCiclo}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Cursos por Ciclo</h2>
      <div className={styles.content}>
        {showForm ? (
          <CursoForm 
            onAddCurso={handleAddCurso}
            onCancel={() => setShowForm(false)}
          />
        ) : (
          <div>
            <div className={styles.addButtonContainer}>
              <button 
                className={styles.addButton}
                onClick={() => setShowForm(true)}
              >
                Agregar Nuevo Curso
              </button>
            </div>
            <CursosList 
              cursos={cursos}
              onCursoClick={handleCursoClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cursosinicio;