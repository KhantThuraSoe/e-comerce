import express from 'express';
import {
	getOrders,
	getOrder,
	createOrder,
	updateOrder,
	deleteOrder,
} from '../controllers/ordersController.js';
const ordersRouter = express.Router();
ordersRouter.get('/', getOrders);
ordersRouter.get('/:orderId', getOrder);
ordersRouter.post('/', createOrder);
ordersRouter.put('/:orderId', updateOrder);
ordersRouter.delete('/:orderId', deleteOrder);
export default ordersRouter;
