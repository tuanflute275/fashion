import express from 'express'
const router = express.Router()
import categoryController from '../controllers/category.controller'
import auth from '../services/authentication.js'
import checkRole from '../services/checkRole'

let initCategory = (app)=>{
    router.post('/add',auth.authentication,checkRole.checkRole, categoryController.addCategory)
    router.get('/get',auth.authentication, categoryController.getCategory)
    router.get('/getCountCategory',auth.authentication, categoryController.getCountCategory)
    router.get('/searchCategory',auth.authentication, categoryController.searchCategory)
    router.get('/getOneCategory/:id',auth.authentication, categoryController.getOneCategory)
    router.put('/update/:id', auth.authentication,checkRole.checkRole, categoryController.updateCategory)
    router.delete('/delete/:id', auth.authentication,checkRole.checkRole, categoryController.deleteCategory)

    return app.use('/category', router)
}

export default initCategory;