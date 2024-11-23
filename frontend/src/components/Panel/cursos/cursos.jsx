import React, { useState } from 'react';
import styles from './cursos.module.css';
import CarrerasList from './lista_de_carreras';
import CarreraForm from './formulario_carrera';
import CursosPorCarrera from './CursosPorCarrera';

const Cursos = () => {
  const [carreras, setCarreras] = useState([
    "Administración de Empresas",
    "Administración de Operaciones Turísticas",
    "Asistencia Administrativa",
    "Contabilidad",
    "Construcción Civil",
    "Desarrollo de Sistemas de Información",
    "Electricidad Industrial",
    "Enfermería Técnica",
    "Manejo Forestal",
    "Mecánica Automotriz",
    "Producción Agropecuaria"
  ]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [selectedCiclo, setSelectedCiclo] = useState(null);

  const handleAddCarrera = (newCarrera) => {
    setCarreras([...carreras, newCarrera]);
    setShowForm(false);
  };

  const handleCarreraClick = (carrera, ciclo) => {
    setSelectedCarrera(carrera);
    setSelectedCiclo(ciclo);
  };

  const handleBack = () => {
    setSelectedCarrera(null);
    setSelectedCiclo(null);
  };

  if (selectedCarrera && selectedCiclo) {
    return (
      <CursosPorCarrera 
        carrera={selectedCarrera}
        ciclo={selectedCiclo}
        onBack={handleBack}
      />
    );
  }

  return (
    <div>
      {showForm ? (
        <CarreraForm 
          onAddCarrera={handleAddCarrera}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <div>
          <div className={styles.addButtonContainer}>
            <button 
              className={styles.addButton}
              onClick={() => setShowForm(true)}
            >
              Agregar Nueva Carrera
            </button>
          </div>
          <CarrerasList 
            carreras={carreras}
            onCarreraClick={handleCarreraClick}
          />
        </div>
      )}
    </div>
  );
};

export default Cursos;
