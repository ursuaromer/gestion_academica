const Router = require('express')
// const {courseRouter} = require('../routes/courseRoutes')
const {userRouter} = require ('../routes/userRoutes')
const {matriculaRouter} = require ('./matriculaRoutes')
const {docenteRouter} = require ('./docenteRoutes')
const { carreraRouter } = require('./carreraRoutes');

const router  = Router()

// router.use('/course',courseRouter)
router.use('/user', userRouter)
router.use('/matricula', matriculaRouter)
router.use('/docente', docenteRouter)
router.use('/carreras', carreraRouter);
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;