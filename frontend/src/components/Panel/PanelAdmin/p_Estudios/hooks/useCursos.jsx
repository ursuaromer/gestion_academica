import { useState } from 'react';

const INITIAL_CURSOS = [
  "Administración de Empresas",
    "Administración de Operaciones Turísticas",
    "Asistencia Administrativa",
    "Contabilidad",
    "Construcción Civil",
    "Desarrollo de Sistemas de Información",
    "Electricidad Industrial",
    "Enfermería Técnica",
    "Manejo Forestal",
    "Mecánica Automotriz",
    "Producción Agropecuaria"
];

export function useCursos() {
  const [cursos, setCursos] = useState(INITIAL_CURSOS);
  const [showForm, setShowForm] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [selectedCiclo, setSelectedCiclo] = useState(null);

  const handleAddCurso = (newCurso) => {
    setCursos([...cursos, newCurso]);
    setShowForm(false);
  };

  const handleCursoClick = (curso, ciclo) => {
    setSelectedCurso(curso);
    setSelectedCiclo(ciclo);
  };

  const handleBack = () => {
    setSelectedCurso(null);
    setSelectedCiclo(null);
  };

  return {
    cursos,
    showForm,
    selectedCurso,
    selectedCiclo,
    handleAddCurso,
    handleCursoClick,
    handleBack,
    setShowForm
  };
}