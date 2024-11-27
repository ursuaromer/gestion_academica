const { Router } = require('express')
const {createMatriculaController,
       getAllMatriculasController,
       updateMatriculaByIdController,
       deleteMatriculaByIdController

} = require('../controllers/matriculaControllers')

const matriculaRouter = Router()

//Create new matricula 
matriculaRouter.post("/", async(req, res)=>{
    const {id, firstName, lastName1, lastName2, nacimiento, dni, direccion, telefono, email, programaEstudio, ciclo} = req.body
    try {
        const newMatricula = await createMatriculaController({id, firstName, lastName1, lastName2, nacimiento, dni, direccion, telefono, email, programaEstudio, ciclo})
        res.status(201).json(newMatricula)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}) 

//Get all matriculas
matriculaRouter.get("/", async(req, res)=>{
    try {
        const matriculas =  await getAllMatriculasController()
        res.status(200).json(matriculas)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Update matricula by id
matriculaRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const matriculaData = req.body
    try {
        const  updatedMatricula = await updateMatriculaByIdController(id, matriculaData)
        if(!updatedMatricula){
            return res.status(404).json({error: "Matricula not found"})
        }
        res.status(200).json(updatedMatricula)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Delete matricula by id
matriculaRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedMatricula = await  deleteMatriculaByIdController(id)
        if(!deletedMatricula){
            return res.status(404).json({error: "matricula not found"})
        }
        res.status(200).json({message: "Matriculado deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    matriculaRouter
}