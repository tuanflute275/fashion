import express from "express";
const router = express.Router();
import cartController from '../controllers/cart.controller'

let initCart = (app) => {
  router.post('/add', cartController.addCart)
  router.delete('/delete/:account_id/:product_id', cartController.deleteCart)
  router.get('/get/:account_id', cartController.getCart)
  router.get('/getCount/:account_id', cartController.getCount)

  return app.use("/cart", router);
};

export default initCart;
