import React from "react";
import './opciones.css';
import Navegador from "../Navegador/Navegador";

const OpcionesComponent = () => {
    const handleOptionClick = (option) => {
        alert(`Opción seleccionada: ${option}`);
    };
    return (
    <div className="opciones-container">
        <Navegador />
        <h2>Seleccione una opción</h2>
        <div className="button-group">
            <button className="option-button" onClick={() => handleOptionClick("Matricula")}>
                Matricula
            </button>
            <button className="option-button" onClick={() => handleOptionClick("Registrar Cursos")}>
                Registrar Cursos
            </button>
            <button className="option-button" onClick={() => handleOptionClick("Registrar Alumno")}>
                Registrar Alumno
            </button>
        </div>
    </div>
    
    );
};

export default OpcionesComponent;
