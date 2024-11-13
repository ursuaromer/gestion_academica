import React, { useState } from "react";
import Navegador from "../Navegador/Navegador";
import './Home.css';
import miVideo from '../IMG/fondo6.mp4';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext/AuthContext"; 

const HomeComponent = () => {
    const { isLoggedIn, login } = useAuth(); // Obtén el estado de autenticación y la función login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "Admin" && password === "Admin") {
            login(); // Actualiza el estado de autenticación
            setError('');
            navigate('/registre'); // Redirige después de iniciar sesión correctamente
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="home">
            <video autoPlay loop muted className="background-video">
                <source src={miVideo} type="video/mp4" />
            </video>
            <Navegador /> {/* El estado de login ya se maneja globalmente */}
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
                        </div>
                        <div className="input-group">
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
            </div>
        </div>
    );
}

export default HomeComponent;




