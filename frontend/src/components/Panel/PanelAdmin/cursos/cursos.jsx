import React, { useState } from 'react';
import styles from './cursos.module.css';
import CarrerasList from './lista_de_carreras';
import CarreraForm from './formulario_carrera';
import CursosPorCarrera from './CursosPorCarrera';

const Cursos = () => {
  const [carreras, setCarreras] = useState([
    { nombre: 'Administración de Empresas', jefeArea: 'Luis García' },
    { nombre: 'Administración de Operaciones Turísticas', jefeArea: 'Ana Pérez' },
    { nombre: 'Asistencia Administrativa', jefeArea: 'Claudia Ramírez' },
    { nombre: 'Contabilidad', jefeArea: 'Carlos Torres' },
    { nombre: 'Construcción Civil', jefeArea: 'Miguel Sánchez' },
    { nombre: 'Desarrollo de Sistemas de Información', jefeArea: 'Gil torres arevalo' },
    { nombre: 'Electricidad Industrial', jefeArea: 'Fernando López' },
    { nombre: 'Enfermería Técnica', jefeArea: 'Patricia Jiménez' },
    { nombre: 'Manejo Forestal', jefeArea: 'Sofía Vargas' },
    { nombre: 'Mecánica Automotriz', jefeArea: 'Jorge Herrera' },
    { nombre: 'Producción Agropecuaria', jefeArea: 'Lucía Gómez' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState(null);

  const handleAddCarrera = (newCarrera) => {
    setCarreras([...carreras, newCarrera]);
    setShowForm(false);
  };

  const handleCarreraClick = (carrera) => {
    setSelectedCarrera(carrera);
  };

  const handleBack = () => {
    setSelectedCarrera(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gestión de Carreras</h1>
      </header>
      {selectedCarrera ? (
        <CursosPorCarrera 
          carrera={selectedCarrera}
          onBack={handleBack}
        />
      ) : (
        <>
          {showForm ? (
            <div className={styles.modal}>
              <CarreraForm 
                onAddCarrera={handleAddCarrera}
                onCancel={() => setShowForm(false)}
              />
            </div>
          ) : (
            <div className={styles.mainContent}>
              <button 
                className={styles.addButton}
                onClick={() => setShowForm(true)}
              >
                + Agregar Nueva Carrera
              </button>
              <CarrerasList 
                carreras={carreras}
                onCarreraClick={handleCarreraClick}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cursos;
