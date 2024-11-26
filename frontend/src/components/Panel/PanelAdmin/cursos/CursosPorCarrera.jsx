import React from 'react';
import styles from './cursos.module.css';

const cursosData = {
  "Administración de Empresas": {
    1: ["Matemática I", "Comunicación", "Fundamentos de Administración"],
    2: ["Contabilidad Básica", "Matemática II", "Economía"],
    3: ["Marketing", "Gestión de Personal", "Finanzas Básicas"],
    4: ["Investigación de Mercados", "Gestión de Proyectos", "Estadística"],
    5: ["Planeamiento Estratégico", "Gestión de Calidad", "Finanzas Corporativas"],
    6: ["Tesis", "Práctica Pre-profesional", "Gestión de Negocios Internacionales"]
  },
  "Contabilidad": {
    1: ["Matemática I", "Contabilidad Básica I", "Derecho Empresarial"],
    2: ["Matemática II", "Contabilidad Básica II", "Economía"],
    3: ["Contabilidad Intermedia", "Tributación I", "Costos"],
    4: ["Contabilidad Avanzada", "Tributación II", "Auditoría"],
    5: ["NIIFs", "Finanzas Corporativas", "Control Interno"],
    6: ["Tesis", "Práctica Pre-profesional", "Contabilidad Gerencial"]
  },
  // Datos de ejemplo para otras carreras...
};

const CursosPorCarrera = ({ carrera, ciclo, onBack }) => {
  const cursos = cursosData[carrera]?.[ciclo] || [];

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          ← Volver
        </button>
        <h2>{carrera}</h2>
        <h3>Ciclo {ciclo}</h3>
      </div>

      {cursos.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Curso</th>
              <th>Docente</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curso}</td>
                <td>sin elegir</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.noCourses}>No hay cursos disponibles para este ciclo</p>
      )}
    </div>
  );
};

export default CursosPorCarrera;