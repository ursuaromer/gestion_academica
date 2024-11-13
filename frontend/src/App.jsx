import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent/HomeComponent';
import OpcionesComponent from './components/opciones/Opciones';
import { AuthProvider } from './components/AuthContext/AuthContext'; 

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/registre" element={<OpcionesComponent />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
