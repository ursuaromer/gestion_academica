import React, { useState } from "react";
import Navegador from "../Navegador/Navegador";
import './Home.css';
import miVideo from '../IMG/fondo6.mp4';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext/AuthContext";

const HomeComponent = () => {
    const { isLoggedIn, login } = useAuth();  // Extracting login state and login function from the AuthContext
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // If the username and password are correct, log in and navigate to the register page
        if (username === "Admin" && password === "Admin") {
            login();  // Call the login function from the context
            setError('');  // Reset the error state
            navigate('/register');  // Redirect to the register page after successful login
        } else {
            setError("Usuario o contraseña incorrectos");  // Show an error message if login fails
        }
    };

    const handleRegisterClick = () => {
        navigate('/registrarse');  // Navigate to the registration page
    };

    return (
        <div className="home">
            <video autoPlay loop muted className="background-video">
                <source src={miVideo} type="video/mp4" />
            </video>
            <Navegador />
            <div className="form-container">
                <p className="title">Welcome </p>
                {!isLoggedIn ? (
                    
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="text" 
                            className="input"
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="error-message">{error}</p>}
                        <button className="form-btn" type="submit">Ingresar</button>
                    </form>
                ) : (
                    <div className="welcome-message">
                        <p>You are logged in! Go to the <span onClick={() => navigate('/dashboard')}>Dashboard</span>.</p>
                    </div>
                )}
                <p className="sign-up-label">
                    ¿No estas registrado? <span className="sign-up-link" onClick={handleRegisterClick}>Registrate</span>
                </p>
            </div>
        </div>
    );
};

export default HomeComponent;





