const Matricula = require('../models/Matricula')

const createMatriculaController =  async ({id, firstName, lastName1, lastName2, nacimiento, dni, direccion, telefono, email, programaEstudio}) => {
    try {
        const newMatricula = await Matricula.create({id, firstName, lastName1, lastName2, nacimiento, dni, direccion, telefono, email, programaEstudio})
        return newMatricula
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all matriculados
const getAllMatriculasController = async () => {
    try {
        const matriculas =  await Matricula.findAll()
        return matriculas

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateMatriculaByIdController  = async (id, matriculaData) => {
    try {
        const matricula = await Matricula.findByPk(id)
        if(!matricula) {
            return null
        }
        await matricula.update(matriculaData)
        return matricula
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteMatriculaByIdController = async(id)=>{
    try {
        const matricula = await Matricula.findByPk(id)
        if(!matricula) {
            return null
        }
        await  matricula.destroy()
        return matricula

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createMatriculaController,
    getAllMatriculasController,
    updateMatriculaByIdController,
    deleteMatriculaByIdController
}
