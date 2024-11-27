import React, { useState } from "react";
import styles from "./ConsultarMatricula.module.css";

const ConsultarMatricula = () => {
  const [formData] = useState({
    nombres: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "Gómez",
    fechaNacimiento: "1990-01-01",
    dni: "12345678",
    direccion: "Av. Siempre Viva 123",
    telefono: "987654321",
    email: "juan.perez@email.com",
    programa: "Ingeniería de Sistemas",
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Consultar Matrícula</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Nombres:</td>
            <td>
              <span className={styles.text}>{formData.nombres}</span>
            </td>
          </tr>
          <tr>
            <td>Apellido Paterno:</td>
            <td>
              <span className={styles.text}>{formData.apellidoPaterno}</span>
            </td>
          </tr>
          <tr>
            <td>Apellido Materno:</td>
            <td>
              <span className={styles.text}>{formData.apellidoMaterno}</span>
            </td>
          </tr>
          <tr>
            <td>Fecha de Nacimiento:</td>
            <td>
              <span className={styles.text}>{formData.fechaNacimiento}</span>
            </td>
          </tr>
          <tr>
            <td>DNI:</td>
            <td>
              <span className={styles.text}>{formData.dni}</span>
            </td>
          </tr>
          <tr>
            <td>Dirección:</td>
            <td>
              <span className={styles.text}>{formData.direccion}</span>
            </td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>
              <span className={styles.text}>{formData.telefono}</span>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <span className={styles.text}>{formData.email}</span>
            </td>
          </tr>
          <tr>
            <td>Programa de Estudio:</td>
            <td>
              <span className={styles.text}>{formData.programa}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConsultarMatricula;
