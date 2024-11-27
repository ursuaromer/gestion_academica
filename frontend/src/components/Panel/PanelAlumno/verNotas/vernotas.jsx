import React from "react";
import styles from "./vernotas.module.css";

const VerNotas = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notas del Estudiante</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Curso</th>
            <th>Nota</th>
            <th>Ciclo</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          {data.map((nota, index) => (
            <tr key={index}>
              <td>{nota.course}</td>
              <td>{nota.grade}</td>
              <td>{nota.ciclo}</td>
              <td>{nota.carrera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerNotas;
