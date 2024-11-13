import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent/HomeComponent';
import OpcionesComponent from './components/opciones/Opciones';
import { AuthProvider } from './components/AuthContext/AuthContext'; 
import CourseForm from './components/opciones/Course';

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/register" element={<OpcionesComponent />} />
          <Route path="/course-register"element={<CourseForm/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
