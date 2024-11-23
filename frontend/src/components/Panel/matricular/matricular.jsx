import { useState } from "react";
import axios from 'axios';
import useMatriculaStore from "../../../Store/matriculaStore";
import styles from './Matricula.module.css'; // Ajusta la ruta si es necesario


const MatriculaForm = ()=>{
    const {addMatricula} = useMatriculaStore()
    const [matriculaData, setMatriculaeData] = useState({
        firstName:"", 
        lastName1:"", 
        lastName2:"", 
        nacimiento:"", 
        dni:"", 
        direccion:"", 
        telefono:"", 
        email:"", 
        programaEstudio:""
    })

    console.log(matriculaData);

    const handleInputChange = (e)=>{
        const  {name, value} = e.target;
        setMatriculaeData({
            ...matriculaData,
            [name]:value
        })

    }

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        addMatricula(matriculaData)
        setMatriculaeData({
            firstName:"", 
            lastName1:"", 
            lastName2:"", 
            nacimiento:"", 
            dni:"", 
            direccion:"", 
            telefono:"", 
            email:"", 
            programaEstudio:""
        })
        alert("Matricula Added Successfully")

        
    }

    

    return(
        <div>
            <h1>Formulario de Matricula</h1>
            
              <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                      <label htmlFor="firstName">Nombres:</label>
                      <input
                          id="firstName"
                          type="text"
                          placeholder="Ingrese Nombres"
                          required
                          name="firstName"
                          value={matriculaData.firstName}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className={styles.formGroup}>
                      <label htmlFor="lastName1">Apellido Paterno:</label>
                      <input
                          id="lastName1"
                          type="text"
                          placeholder="Ingrese Apellido Paterno"
                          required
                          name="lastName1"
                          value={matriculaData.lastName1}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className={styles.formGroup}>
                      <label htmlFor="lastName2">Apellido Materno:</label>
                      <input
                          id="lastName2"
                          type="text"
                          placeholder="Ingrese Apellido Materno"
                          required
                          name="lastName2"
                          value={matriculaData.lastName2}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="nacimiento">Fecha de Nacimiento:</label>
                    <input
                        id="nacimiento"
                        type="date" 
                        required
                        name="nacimiento"
                        value={matriculaData.nacimiento}
                        onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                      <label htmlFor="dni">DNI:</label>
                      <input
                          id="dni"
                          type="text"
                          placeholder="Ingrese DNI"
                          required
                          name="dni"
                          value={matriculaData.dni}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className={styles.formGroup}>
                      <label htmlFor="direccion">Dirección:</label>
                      <input
                          id="direccion"
                          type="text"
                          placeholder="Ingrese Direccion"
                          required
                          name="direccion"
                          value={matriculaData.direccion}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className={styles.formGroup}>
                      <label htmlFor="telefono">Teléfono:</label>
                      <input
                          id="telefono"
                          type="text"
                          placeholder="Ingrese Teléfono"
                          required
                          name="telefono"
                          value={matriculaData.telefono}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email" 
                        placeholder="Ingrese Gmail"
                        required
                        name="email"
                        value={matriculaData.email}
                        onChange={handleInputChange}
                    />
                  </div>


                  <div className={styles.formGroup}>
                      <label htmlFor="programaEstudio">Programa de Estudio:</label>
                      <select
                          id="programaEstudio"
                          name="programaEstudio"
                          value={matriculaData.programaEstudio}
                          onChange={handleInputChange}
                          required
                      >
                          <option value="">Seleccione un Programa de Estudio</option>
                          <option value="ADMINISTRACIÓN DE EMPRESAS">ADMINISTRACIÓN DE EMPRESAS</option>
                          <option value="ADMINISTRACIÓN DE OPERACIONES TURÍSTICAS">ADMINISTRACIÓN DE OPERACIONES TURÍSTICAS</option>
                          <option value="ASISTENCIA ADMINISTRATIVA">ASISTENCIA ADMINISTRATIVA</option>
                          <option value="CONTABILIDAD">CONTABILIDAD</option>
                          <option value="CONSTRUCCIÓN CIVIL">CONSTRUCCIÓN CIVIL</option>
                          <option value="DESARROLLO DE SISTEMAS DE INFORMACIÓN">DESARROLLO DE SISTEMAS DE INFORMACIÓN</option>
                          <option value="ELECTRICIDAD INDUSTRIAL">ELECTRICIDAD INDUSTRIAL</option>
                          <option value="ENFERMERÍA TÉCNICA">ENFERMERÍA TÉCNICA</option>
                          <option value="MANEJO FORESTAL">MANEJO FORESTAL</option>
                          <option value="MECATRÓNICA AUTOMOTRIZ">MECATRÓNICA AUTOMOTRIZ</option>
                          <option value="PRODUCCIÓN AGROPECUARIA">PRODUCCIÓN AGROPECUARIA</option>
                      </select>
                  </div>

                  <button type="submit" className={styles.submitButton}>REGISTRAR</button>
              </form>
        </div>

    )
}

export default  MatriculaForm;
