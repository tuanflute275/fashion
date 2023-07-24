import express from 'express'
const router = express.Router()
import productController from '../controllers/product.controller'
import auth from '../services/authentication.js'
import checkRole from '../services/checkRole'

let initProduct = (app)=>{
    router.post('/add',auth.authentication,checkRole.checkRole, productController.addProduct)
    router.get('/searchProduct',auth.authentication, productController.searchProduct)
    router.get('/get',auth.authentication, productController.getProduct)
    router.get('/getCountProduct',auth.authentication, productController.getCountProduct)
    router.get('/getOneProduct/:id',auth.authentication, productController.getOneProduct)
    router.get('/getByCategory/:id',auth.authentication, productController.getByCategory)
    router.get('/getById/:id',auth.authentication, productController.getById)
    router.get('/getTop',auth.authentication, productController.getTop)
    router.put('/update/:id', auth.authentication,checkRole.checkRole, productController.updateProduct)
    router.put('/updateStatus', auth.authentication,checkRole.checkRole, productController.updateStatus)
    router.delete('/delete/:id', auth.authentication,checkRole.checkRole, productController.deleteProduct)


    return app.use('/product', router)
}

export default initProduct;
