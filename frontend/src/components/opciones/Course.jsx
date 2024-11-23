import { useState } from "react";
import './course.css';
import useCourseStore from "../../Store/courseStore";
import Navegador from "../Navegador/Navegador";

const CourseForm = () => {
    const { addCourse } = useCourseStore();
    const [CourseData, setCourseData] = useState({
        id:"",
        name: "",
        credits: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseData({
            ...CourseData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addCourse(CourseData); 
            console.log(CourseData);
            alert('Registro Exitoso');
            setCourseData({ name: "", credits: "" });
        } catch (error) {
            console.error("Error al agregar Curso:", error);
            alert("Error al agregar Curso. Inténtalo nuevamente.");
        }
    };

    return (
        <div className="form-register">
            <Navegador />
            <div className="form-container">
                <h1>Course Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter id"
                        required
                        name="id"
                        value={CourseData.id}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter name"
                        required
                        name="name"
                        value={CourseData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter credits"
                        required
                        name="credits"
                        value={CourseData.credits}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default CourseForm;