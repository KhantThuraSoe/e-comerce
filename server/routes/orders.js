import express from 'express';
import {
	// getOrders,
	postOrder,
	// deleteOrder,
} from '../controllers/ordersController.js';
const ordersRouter = express.Router();
// ordersRouter.get('/', getOrders);

ordersRouter.post('/', postOrder);
// ordersRouter.delete('/:orderId', deleteOrder);
export default ordersRouter;
