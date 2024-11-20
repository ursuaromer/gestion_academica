import React, { useState } from 'react';
import styles from './Panel.module.css';
import Matricular from './matricular/matricular';
import Docentes from './docentes/docentes';
import Cursos from './cursos/cursos';
import PlanEstudios from './p_Estudios/ProEstudios';
const Panel = () => {
  const [activeSection, setActiveSection] = useState('matricular');

  const renderSection = () => {
    switch (activeSection) {
      case 'matricular':
        return <Matricular />;
      case 'docentes':
        return <Docentes />;
      case 'cursos':
        return <Cursos />;
      case 'planEstudios':
        return <PlanEstudios />;
      default:
        // return <Matricular />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span role="img" aria-label="home">🏠</span>
        </div>
        <h1 className={styles.title}>PANEL ADMINISTRATIVO</h1>
        <div className={styles.userLogo}>Menu</div>
      </header>
      <div className={styles.main}>
        <aside className={styles.sidebar}>
          <button 
            className={`${styles.button} ${activeSection === 'matricular' ? styles.active : ''}`}
            onClick={() => setActiveSection('matricular')}
          >
            MATRICULAR
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'docentes' ? styles.active : ''}`}
            onClick={() => setActiveSection('docentes')}
          >
            DOCENTES
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'cursos' ? styles.active : ''}`}
            onClick={() => setActiveSection('cursos')}
          >
            VER CURSOS
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'planEstudios' ? styles.active : ''}`}
            onClick={() => setActiveSection('planEstudios')}
          >
            P. ESTUDIOS
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'planEstudios' ? styles.active : ''}`}
            onClick={() => setActiveSection('planEstudios')}
          >
            INSERTAR NOTAS 
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'planEstudios' ? styles.active : ''}`}
            onClick={() => setActiveSection('planEstudios')}
          >
            P. ESTUDIOS
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'planEstudios' ? styles.active : ''}`}
            onClick={() => setActiveSection('planEstudios')}
          >
            P. ESTUDIOS
          </button>
          <button 
            className={`${styles.button} ${activeSection === 'planEstudios' ? styles.active : ''}`}
            onClick={() => setActiveSection('planEstudios')}
          >
            P. ESTUDIOS
          </button>
        </aside>
        <section className={styles.content}>
          {renderSection()}
        </section>
      </div>
    </div>
  );
};

export default Panel;