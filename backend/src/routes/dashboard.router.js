import express from 'express'
const router = express.Router()
import dashboardController from '../controllers/dashboard.controller'
import auth from '../services/authentication.js'

let initDashboard = (app)=>{
    router.get('/getDetailerCategory',auth.authentication, dashboardController.getDetailCategory)
    router.get('/getDetailProduct',auth.authentication, dashboardController.getDetailProduct)

    return app.use('/dashboard', router)
}

export default initDashboard;
