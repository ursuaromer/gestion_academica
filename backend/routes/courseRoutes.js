const { Router } = require('express')
const {createCourseController,
       getAllCourseController,
       updateCourseByIdController,
       deleteCourseByIdController

} = require('../controllers/courseControllers')

const courseRouter = Router()


courseRouter.post("/", async(req, res)=>{
    const {id, name, credits} = req.body
    try {
        const newCourse = await createCourseController({id, name, credits})
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}) 


courseRouter.get("/", async(req, res)=>{
    try {
        const course =  await getAllCourseController()
        res.status(200).json(course)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

courseRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const courseData = req.body
    try {
        const  updatedCourse = await updateCourseByIdController(id, courseData)
        if(!updatedCourse){
            return res.status(404).json({error: "Course not found"})
        }
        res.status(200).json(updatedCourse)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

courseRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedCourse = await  deleteCourseByIdController(id)
        if(!deletedCourse){
            return res.status(404).json({error: "Course not found"})
        }
        res.status(200).json({message: "Course deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    courseRouter
}