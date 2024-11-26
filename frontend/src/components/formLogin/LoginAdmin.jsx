import React, { useState, useRef, useEffect } from "react";
import Navegador from "../Navegador/Navegador";
import './LoginAdmin.css';
import miVideo from '../IMG/fondo6.mp4';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../Store/userStore'; // Asegúrate de importar desde el lugar correcto

const FormAdmin = () => {
    const { isLoggedIn, login, error, loading } = useUserStore(); // Asegúrate de que login esté disponible aquí
    const [dni, setDni] = useState('');  // Cambiamos de username a dni
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const videoRef = useRef(null); // Referencia para el video

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3; // Reproducción lenta para mayor suavidad
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dni && password) {
            login(dni, password);  // Usamos el login del store
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    const handleRegisterClick = () => {
        navigate('/registrarse');
    };

    // Si está logueado, redirigir a otra página (puedes cambiar la ruta)
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/panel'); // O cualquier otra página a la que desees redirigir
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="home">
            <video 
                ref={videoRef} 
                autoPlay 
                loop 
                muted 
                className="background-video">
                <source src={miVideo} type="video/mp4" />
            </video>
            <Navegador />
            <div className="container">
                <h1 className="letra">Welcome</h1>
                {!isLoggedIn && (
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="dni">DNI:</label>
                            <input
                                type="text"
                                id="dni"
                                placeholder="Ingresa tu DNI"
                                value={dni}
                                onChange={(e) => setDni(e.target.value)}
                            />
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">Ingresar</button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                )}
                {!isLoggedIn && (
                    <button className="register-button" onClick={handleRegisterClick}>
                        Regístrate
                    </button>
                )}
            </div>
        </div>
    );
};

export default FormAdmin;
