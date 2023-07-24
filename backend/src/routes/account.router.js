import express from 'express'
const router = express.Router()
import accountController from '../controllers/account.controller'
import auth from '../services/authentication'
import checkRole from '../services/checkRole'

let initAccount = (app) => {
    //admin
    router.get('/getAdmin',auth.authentication, accountController.getAdmin)
    router.get('/getOneAdmin/:id',auth.authentication, accountController.getOneAdmin)
    router.post('/add',auth.authentication, accountController.createAdmin)
    router.put('/update/:id',auth.authentication, accountController.updateAdmin)


    //user
    router.get('/getUser',auth.authentication, accountController.getUser)
    router.delete('/delete/:id',auth.authentication, accountController.deleteUser)
    router.get('/getStatus/:id',auth.authentication, accountController.getStatus)
    router.put('/updateStatus/:id',auth.authentication, accountController.updateStatus)

    //count
    router.get('/getCountAdmin',auth.authentication, accountController.getCountAdmin)
    router.get('/getCountUser',auth.authentication, accountController.getCountUser)

    //search
    router.get('/searchAdmin',auth.authentication, accountController.searchAdmin)
    router.get('/searchUser',auth.authentication, accountController.searchUser)

    return app.use('/account', router)
}

export default initAccount;