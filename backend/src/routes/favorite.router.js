import express from "express";
const router = express.Router();
import favoriteController from '../controllers/favorite.controller'

let initFavorite = (app) => {
  router.post('/add', favoriteController.addFavorite)
  router.delete('/delete/:account_id/:product_id', favoriteController.deleteFavorite)
  router.get('/get/:account_id', favoriteController.getFavorite)
  router.get('/getCount/:account_id', favoriteController.getCount)

  return app.use("/favorite", router);
};

export default initFavorite;
