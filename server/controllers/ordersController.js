import { Orders } from '../models/ordersModel.js';
const getOrders = async (req, res) => {
	try {
		const orders = await Orders.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};
const getOrder = async (req, res) => {
	try {
		const order = await Orders.findById(req.params.orderId);
		if (!order) {
			throw new Error('Order not found!');
		}
		res.status(200).json(order);
	} catch (error) {
		res.json({ error: error.message });
	}
};
const createOrder = async (req, res) => {
	res.send('Order created!');
};
const updateOrder = async (req, res) => {
	res.send('Order updated!');
};
const deleteOrder = async (req, res) => {
	res.send('Order deleted!');
};
export { getOrders, getOrder, createOrder, updateOrder, deleteOrder };
