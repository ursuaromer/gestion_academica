import React, { useState } from 'react';
import styles from './cursos.module.css';

const CarrerasList = ({ carreras, onCarreraClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCiclo, setSelectedCiclo] = useState('');

  const ciclos = [
    { id: 1, nombre: "Primer Ciclo" },
    { id: 2, nombre: "Segundo Ciclo" },
    { id: 3, nombre: "Tercer Ciclo" },
    { id: 4, nombre: "Cuarto Ciclo" },
    { id: 5, nombre: "Quinto Ciclo" },
    { id: 6, nombre: "Sexto Ciclo" },
  ];

  const filteredCarreras = carreras.filter(carrera =>
    carrera.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCarreraClick = (carrera) => {
    if (selectedCiclo) {
      onCarreraClick(carrera, parseInt(selectedCiclo));
    } else {
      alert('Por favor seleccione un ciclo primero');
    }
  };

  return (
    <div className={styles.section}>
      <h2>Lista de Carreras</h2>
      
      <div className={styles.filterContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar carrera..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className={styles.selectContainer}>
          <select
            className={styles.cycleSelect}
            value={selectedCiclo}
            onChange={(e) => setSelectedCiclo(e.target.value)}
          >
            <option value="">Seleccionar Ciclo</option>
            {ciclos.map((ciclo) => (
              <option key={ciclo.id} value={ciclo.id}>
                {ciclo.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre de la Carrera</th>
            <th>Ciclo</th>
          </tr>
        </thead>
        <tbody>
          {filteredCarreras.map((carrera, index) => (
            <tr 
              key={index}
              onClick={() => handleCarreraClick(carrera)}
              className={styles.tableRow}
            >
              <td>{index + 1}</td>
              <td>{carrera}</td>
              <td>{selectedCiclo ? `${ciclos[parseInt(selectedCiclo) - 1]?.nombre}` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarrerasList;