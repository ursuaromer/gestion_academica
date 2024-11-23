import { useEffect } from "react";
import useMatriculaStore from "../../../Store/matriculaStore";
import style from './matriculaList.module.css';

const MatriculaList = () => {
    const { fetchMatriculas, matriculas, deleteMatricula } = useMatriculaStore();
    
    useEffect(() => {
        fetchMatriculas();
    }, []);

    const handleDelete = (id) => {
        if(window.confirm("Are you sure?")) {
            deleteMatricula(id);
        }
    }

    return (
        <div className={style.container}>
            <h1>Lista de Matriculados</h1>
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
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName1} {user.lastName2}</td>
                                <td>{user.nacimiento}</td>
                                <td>{user.dni}</td>
                                <td>{user.direccion}</td>
                                <td>{user.telefono}</td>
                                <td>{user.email}</td>
                                <td>{user.programaEstudio}</td>
                                <td>
                                    <button onClick={() => handleDelete(user.id)} className={style.deleteButton}>❌</button>
                                    <button className={style.editButton}>✍️</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default MatriculaList;
