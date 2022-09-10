import express from 'express';
import {
	getOrders,
	getOrder,
	postOrder,
	// deleteOrder,
} from '../controllers/ordersController.js';
const ordersRouter = express.Router();
ordersRouter.get('/', getOrders);
ordersRouter.get('/:userId', getOrder);

ordersRouter.post('/', postOrder);
// ordersRouter.delete('/:orderId', deleteOrder);
export default ordersRouter;
