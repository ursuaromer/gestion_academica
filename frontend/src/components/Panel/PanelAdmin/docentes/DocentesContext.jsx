import React, { createContext, useState, useContext } from 'react';

const DocentesContext = createContext();

export const useDocentes = () => {
  return useContext(DocentesContext);
};

export const DocentesProvider = ({ children }) => {
  const [docentes, setDocentes] = useState([]);

  const agregarDocente = (docente) => {
    setDocentes((prevDocentes) => [...prevDocentes, docente]);
  };

  return (
    <DocentesContext.Provider value={{ docentes, agregarDocente }}>
      {children}
    </DocentesContext.Provider>
  );
};

export default DocentesContext;
