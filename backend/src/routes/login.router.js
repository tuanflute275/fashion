import express from 'express'
const router = express.Router()
import loginController from '../controllers/login.controller'
import auth from '../services/authentication'
import checkRole from '../services/checkRole'

let initRouterWeb = (app) => {
    router.post('/signup', loginController.createUser)
    router.post('/login', loginController.loginUser)
    router.post('/forgotPassword', loginController.forgotPassword)
    router.get('/getUser',auth.authentication,checkRole.checkRole, loginController.getUser)
    router.patch('/update',auth.authentication,checkRole.checkRole, loginController.updatePassword)
    router.get('/checkToken',auth.authentication, loginController.checkToken)
    router.post('/changePassword',auth.authentication, loginController.changePassword)

    return app.use('/user', router)
}

export default initRouterWeb;