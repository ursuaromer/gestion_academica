const {Router} = require('express')
const {courseRouter} = require('../routes/courseRoutes')
const {userRouter} = require ('../routes/userRoutes')
const { matriculaRouter } = require('./matriculaRoutes')

const router  = Router()

router.use('/course',courseRouter)
router.use('/user', userRouter)
router.use('/matricula', matriculaRouter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;