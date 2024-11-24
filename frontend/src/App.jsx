import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext/AuthContext'; 
import HomeComponent from './components/homeComponent/HomeComponent';

import Admins from './components/panels/admins';
import Docentes from './components/panels/docentes';
import Alumnos from './components/panels/alumnos';
import FormAdmin from './components/formLogin/LoginAdmin';
import OpcionesComponent from './components/opciones/Opciones';

import { AuthProvider } from './components/AuthContext/AuthContext'; 
import Panel from './components/Panel/Panel';

import CourseForm from './components/opciones/Course';
import UserForm from './components/userRegister/UserRegister';

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />

          <Route path="/panel-admin" element={<Admins />} />
          <Route path="/panel-docente" element={<Docentes />} />
          <Route path="/panel-alumno" element={<Alumnos />} />
          {/* <Route path="/loginadmin" element={<FormAdmin />} />
          <Route path="/register" element={<OpcionesComponent />} />

          <Route path="/panel" element={<Panel/>} />

          <Route path="/course-register"element={<CourseForm/>}/>
          <Route path="/registrarse" element={<UserForm/>}/> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
