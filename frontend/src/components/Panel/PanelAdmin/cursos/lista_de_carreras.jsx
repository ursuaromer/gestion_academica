import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './cursos.module.css';

const CarrerasList = () => {
  const [carreras, setCarreras] = useState([]); // Estado para las carreras
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener las carreras desde el backend
  useEffect(() => {
    const fetchCarreras = async () => {
      try {
        const response = await axios.get('http://localhost:3001/carreras');
        setCarreras(response.data); // Actualiza el estado con los datos recibidos
      } catch (err) {
        setError('Error al cargar las carreras. Inténtalo nuevamente.');
        console.error('Error al obtener las carreras:', err);
      } finally {
        setLoading(false); // Desactiva el estado de carga
      }
    };

    fetchCarreras();
  }, []);

  // Filtrar carreras por el término de búsqueda
  const filteredCarreras = carreras.filter((carrera) =>
    carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className={styles.loading}>Cargando carreras...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

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
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre de la Carrera</th>
            <th>Jefe de Área</th>
          </tr>
        </thead>
        <tbody>
          {filteredCarreras.length === 0 ? (
            <tr>
              <td colSpan="3" className={styles.noResults}>
                No se encontraron carreras
              </td>
            </tr>
          ) : (
            filteredCarreras.map((carrera, index) => (
              <tr key={carrera.id} className={styles.tableRow}>
                <td>{index + 1}</td>
                <td>{carrera.nombre}</td>
                <td>{carrera.jefe_area}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarrerasList;
