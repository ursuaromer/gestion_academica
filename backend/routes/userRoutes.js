const { Router } = require('express')
const {createUserController,
        getAllUserController,
        updateUserByIdController,
        deleteUserByIdController

} = require('../controllers/userControllers')

const userRouter = Router()

//Create new student 
userRouter.post("/", async (req, res) => {
    const { username, password, role } = req.body;
    try {
      const newUser = await createUserController({ username, password, role });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

//Get all students
userRouter.get("/", async(req, res)=>{
    try {
        const users =  await getAllUserController()
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Update student by id
userRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const userData = req.body
    try {
        const  updatedUser = await updateUserByIdController(id, userData)
        if(!updatedUser){
            return res.status(404).json({error: "User not found"})
        }
        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Delete student by id
userRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedUser = await  deleteUserByIdController(id)
        if(!deletedUser){
            return res.status(404).json({error: "User not found"})
        }
        res.status(200).json({message: "User deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    userRouter
}