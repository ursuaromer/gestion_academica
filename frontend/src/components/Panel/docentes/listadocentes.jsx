import React from 'react';
import { useDocentes } from './docentes';  // Importa el hook del contexto

const Listado_docentes = () => {
  const { docentes } = useDocentes();  // Accede a la lista de docentes

  return (
    <div>
      <h2>Listado de Docentes</h2>
      {docentes.length === 0 ? (
        <p>No hay docentes registrados</p>
      ) : (
        <ul>
          {docentes.map((docente, index) => (
            <li key={index}>
              {docente.nombre} {docente.apellido} - {docente.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listado_docentes;
