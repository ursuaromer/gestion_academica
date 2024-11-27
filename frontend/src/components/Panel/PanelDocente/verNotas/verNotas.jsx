import React from "react";
import styles from "./VerNotas.module.css";

const VerNotas = ({ estudiantes, ciclos }) => {
  // Agrupar estudiantes por ciclo
  const estudiantesPorCiclo = ciclos.map((ciclo) => {
    return {
      ciclo: ciclo.nombre,
      estudiantes: estudiantes.filter((est) => est.ciclo === ciclo.id),
    };
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notas de Estudiantes</h2>
      {estudiantesPorCiclo.map((grupo) => (
        <div key={grupo.ciclo} className={styles.cicloSection}>
          <h3 className={styles.cicloTitle}>{grupo.ciclo}</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Curso</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {grupo.estudiantes.map((estudiante) => (
                <tr key={estudiante.id}>
                  <td>{estudiante.dni}</td>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.curso}</td>
                  <td>{estudiante.nota || "Sin asignar"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default VerNotas;
