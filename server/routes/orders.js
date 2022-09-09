import express from 'express';
import {
	getOrder,
	postOrder,
	// deleteOrder,
} from '../controllers/ordersController.js';
const ordersRouter = express.Router();
ordersRouter.get('/:userId', getOrder);

ordersRouter.post('/', postOrder);
// ordersRouter.delete('/:orderId', deleteOrder);
export default ordersRouter;
