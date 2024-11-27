import React, { useState } from "react";
import styles from "./AgregarNotas.module.css";

const AgregarNotas = () => {
  // Ciclos disponibles
  const [ciclos] = useState([
    { id: 1, nombre: "Ciclo 1" },
    { id: 2, nombre: "Ciclo 2" },
    { id: 3, nombre: "Ciclo 3" },
  ]);

  // Estudiantes con notas asociadas a ciclos
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, ciclo: 1, dni: "12345678", nombre: "Juan Pérez", curso: "Matemáticas", nota: "", guardada: false },
    { id: 2, ciclo: 1, dni: "87654321", nombre: "Ana Martínez", curso: "Historia", nota: "", guardada: false },
    { id: 3, ciclo: 2, dni: "22334455", nombre: "Luis Gómez", curso: "Ciencias", nota: "", guardada: false },
    { id: 4, ciclo: 2, dni: "33445566", nombre: "María López", curso: "Matemáticas", nota: "", guardada: false },
    { id: 5, ciclo: 3, dni: "44556677", nombre: "Carlos Sánchez", curso: "Química", nota: "", guardada: false },
    { id: 6, ciclo: 3, dni: "55667788", nombre: "Lucía Torres", curso: "Física", nota: "", guardada: false },
  ]);

  const [cicloSeleccionado, setCicloSeleccionado] = useState(1);
  const [filtro, setFiltro] = useState(""); // Estado para el filtro

  // Manejar cambios de nota
  const handleNotaChange = (id, nuevaNota) => {
    setEstudiantes((prevEstudiantes) =>
      prevEstudiantes.map((est) =>
        est.id === id ? { ...est, nota: nuevaNota } : est
      )
    );
  };

  // Manejar guardado y cambio de botón
  const handleGuardarEditarNota = (id) => {
    setEstudiantes((prevEstudiantes) =>
      prevEstudiantes.map((est) =>
        est.id === id ? { ...est, guardada: !est.guardada } : est
      )
    );
  };

  // Filtrar estudiantes por ciclo seleccionado y por filtro (DNI o apellido)
  const estudiantesFiltrados = estudiantes
    .filter((est) => est.ciclo === cicloSeleccionado)
    .filter(
      (est) =>
        est.dni.includes(filtro) ||
        est.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Asignar Notas por Ciclo</h2>
      
      {/* Selector de ciclo */}
      <div className={styles.inputGroup}>
        <label htmlFor="ciclo">Seleccionar Ciclo:</label>
        <select
          id="ciclo"
          value={cicloSeleccionado}
          onChange={(e) => setCicloSeleccionado(Number(e.target.value))}
        >
          {ciclos.map((ciclo) => (
            <option key={ciclo.id} value={ciclo.id}>
              {ciclo.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Campo de búsqueda */}
      <div className={styles.inputGroup}>
        <label htmlFor="filtro">Buscar por DNI o Apellido:</label>
        <input
          type="text"
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Ingrese DNI o Apellido"
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Curso</th>
            <th>Nota</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {estudiantesFiltrados.map((estudiante) => (
            <tr key={estudiante.id}>
              <td>{estudiante.dni}</td>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.curso}</td>
              <td>
                <input
                  type="number"
                  value={estudiante.nota}
                  onChange={(e) => handleNotaChange(estudiante.id, e.target.value)}
                  disabled={estudiante.guardada}
                  className={styles.inputNota}
                />
              </td>
              <td>
                <button
                  onClick={() => handleGuardarEditarNota(estudiante.id)}
                  className={styles.guardarButton}
                >
                  {estudiante.guardada ? "Editar" : "Guardar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgregarNotas;
