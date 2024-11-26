import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './components/AuthContext/AuthContext';
import HomeComponent from './components/homeComponent/HomeComponent';
// import Admins from './components/adminComponent/Admins';
import Panelg from './components/Panel/PanelAdmin/Panel';
import Docentes from './components/Panel/PanelDocente/docentes';
import Alumnos from './components/Panel/PanelAlumno/alumnos';
import { AuthProvider } from './components/AuthContext/AuthContext'; 
// import Panel from './components/Panel/Panel';

// import CourseForm from './components/opciones/Course';
// import UserForm from './components/userRegister/UserRegister';

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/panel" element={<Panelg/>} />
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