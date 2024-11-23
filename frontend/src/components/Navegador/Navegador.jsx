import React from 'react';
import './navegador.css';
import logo from '../IMG/logo.png';
import { IoHome } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext'; 

const Navegador = () => {
    const { isLoggedIn } = useAuth(); // Obtén el estado de autenticación

    const navigate = useNavigate();

    const handleProtectedRoute = (route) => {
        if (isLoggedIn) {
            navigate(route);
        } 
    };

    return (
        <div className='navegador'>
            <div className='logoimg'>
                <img src={logo} alt="Logo" />
            </div>
            <nav className='menu'>
                <Link to='/' className='link-nav'>
                    <IoHome className='ico' />Inicio
                </Link>
                <button
                    className='link-nav'
                    onClick={() => handleProtectedRoute('/register')}
                    disabled={!isLoggedIn} 
                >
                    <LuPencilLine className='ico' />Registrar Datos
                </button>
                <button
                    className='link-nav'
                    onClick={() => handleProtectedRoute('/coursetlist')}
                    disabled={!isLoggedIn} 
                >
                    <GrContactInfo className='ico' />Course List
                </button>
            </nav>
        </div>
    );
}

export default Navegador;
