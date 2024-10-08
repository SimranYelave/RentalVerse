import express from 'express';
import auth from '../middleware/auth.js'; // Assuming middleware is in a separate file
import { PlaceOrder } from '../controllers/orderController.js'; // Assuming controller is in a separate file

const orderRouter = express.Router(); // Use correct casing

// Route definition with middleware in the correct order
orderRouter.post('/place', auth, PlaceOrder);

export default orderRouter;