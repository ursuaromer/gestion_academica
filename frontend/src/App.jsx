import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent/HomeComponent';
import { AuthProvider } from './components/AuthContext/AuthContext'; 
import Panel from './components/Panel/Panel';
import CourseForm from './components/opciones/Course';
import UserForm from './components/userRegister/UserRegister';
import MatriculaList from './components/Panel/MatriculaList/MatriculaList';

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/panel" element={<Panel/>} />
          <Route path="/course-register"element={<CourseForm/>}/>
          <Route path="/registrarse" element={<UserForm/>}/>
          <Route path="/matriculaList" element={<MatriculaList/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
