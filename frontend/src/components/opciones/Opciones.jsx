import React from "react";
import './opciones.css';
import miVideo from '../IMG/fondo6.mp4'
import Navegador from "../Navegador/Navegador";
import { useNavigate } from "react-router-dom";

const OpcionesComponent = () => {
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        if (option === "Registrar Cursos") {
            navigate('/course-register'); 
        } else {
            alert(`Opción seleccionada: ${option}`);
        }
    };

    return (
        <div className="opciones-container">
            <video autoPlay loop muted className="background-fvideo">
                <source src={miVideo} type="video/mp4" />
            </video>
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

