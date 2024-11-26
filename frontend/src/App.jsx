import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent/HomeComponent';
import Panel from './components/Panel/Panel';
import Admins from './components/panels/admins';
import Docentes from './components/panels/docentes';
import Alumnos from './components/panels/alumnos';
import FormAdmin from './components/formLogin/LoginAdmin';
// import OpcionesComponent from './components/opciones/Opciones';

import { AuthProvider } from './components/AuthContext/AuthContext'; 

import CourseForm from './components/opciones/Course';
import UserForm from './components/userRegister/UserRegister';

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />

          <Route path="/panel" element={<Panel/>} />
          <Route path="/panel-docente" element={<Docentes />} />
          <Route path="/panel-alumno" element={<Alumnos />} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;