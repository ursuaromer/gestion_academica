const Course = require('../models/course')

const createCourseController =  async ({id, name, credits}) => {
    try {
        const newCourse = await Course.create({id, name, credits})
        return newCourse
    } catch (error) {
        throw new Error(error.message)
    }
}


const getAllCourseController = async () => {
    try {
        const courses =  await Course.findAll()
        return courses

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateCourseByIdController  = async (id, courseData) => {
    try {
        const course = await Course.findByPk(id)
        if(!course) {
            return null
        }
        await course.update(courseData)
        return course
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteCourseByIdController = async(id)=>{
    try {
        const course = await Course.findByPk(id)
        if(!course) {
            return null
        }
        await  course.destroy()
        return course

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createCourseController,
    getAllCourseController,
    updateCourseByIdController,
    deleteCourseByIdController
}
