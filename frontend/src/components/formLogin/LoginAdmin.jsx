import React, { useState, useRef, useEffect } from "react";
import Navegador from "../Navegador/Navegador";
import './LoginAdmin.css';
import miVideo from '../IMG/fondo6.mp4';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext/AuthContext";

const FormAdmin = () => {
    const { isLoggedIn, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const videoRef = useRef(null); // Referencia para el video

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3; // Reproducción lenta para mayor suavidad
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "Admin" && password === "Admin") {
            login();
            setError('');
            navigate('/register'); 
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    const handleRegisterClick = () => {
        navigate('/registrarse');
    };

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
                            <label htmlFor="username">Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        {/* <div className="input-group"></div> */}
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