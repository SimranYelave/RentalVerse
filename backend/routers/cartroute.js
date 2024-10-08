import express from 'express'
import { addtoCart,removefromCart,getCart } from '../controllers/cartController.js'
import authMiddle from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMiddle,addtoCart)
cartRouter.post("/remove",authMiddle,removefromCart)
cartRouter.post("/get",authMiddle,getCart)

export default cartRouter;
