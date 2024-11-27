import { useEffect, useState } from "react";
import useMatriculaStore from "../../../../Store/matriculaStore";
import style from './matriculaList.module.css';

const MatriculaList = () => {
    const { fetchMatriculas, matriculas, deleteMatricula } = useMatriculaStore();
    const [filteredMatriculas, setFilteredMatriculas] = useState([]);
    const [filterPrograma, setFilterPrograma] = useState("");
    const [filterCiclo, setFilterCiclo] = useState("");

    useEffect(() => {
        fetchMatriculas();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [matriculas, filterPrograma, filterCiclo]);

    const applyFilters = () => {
        const filtered = matriculas.filter((user) => {
            const programaMatch = filterPrograma ? user.programaEstudio === filterPrograma : true;
            const cicloMatch = filterCiclo ? user.ciclo === filterCiclo : true;
            return programaMatch && cicloMatch;
        });
        setFilteredMatriculas(filtered);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteMatricula(id);
        }
    };

    const uniqueProgramas = [...new Set(matriculas.map((user) => user.programaEstudio))];
    const uniqueCiclos = [...new Set(matriculas.map((user) => user.ciclo))];

    return (
        <div className={style.container}>
            <h1>Lista de Matriculados</h1>
            
            {/* Filtros */}
            <div className={style.filters}>
                <label>
                    Programa de Estudio:
                    <select value={filterPrograma} onChange={(e) => setFilterPrograma(e.target.value)}>
                        <option value="">Todos</option>
                        {uniqueProgramas.map((programa) => (
                            <option key={programa} value={programa}>
                                {programa}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Ciclo:
                    <select value={filterCiclo} onChange={(e) => setFilterCiclo(e.target.value)}>
                        <option value="">Todos</option>
                        {uniqueCiclos.map((ciclo) => (
                            <option key={ciclo} value={ciclo}>
                                {ciclo}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            
            {/* Tabla */}
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Fecha de Nacimiento</th>
                        <th>DNI</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Programa de Estudio</th>
                        <th>Ciclo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMatriculas.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName1} {user.lastName2}</td>
                            <td>{user.nacimiento}</td>
                            <td>{user.dni}</td>
                            <td>{user.direccion}</td>
                            <td>{user.telefono}</td>
                            <td>{user.email}</td>
                            <td>{user.programaEstudio}</td>
                            <td>{user.ciclo}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id)} className={style.deleteButton}>❌</button>
                                <button className={style.editButton}>✍️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MatriculaList;
