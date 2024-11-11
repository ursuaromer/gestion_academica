const {Router} = require('express')
const {courseRouter} = require('../routes/courseRoutes')

const router  = Router()

router.use('/course',courseRouter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;