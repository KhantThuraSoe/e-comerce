import { Orders } from '../models/ordersModel.js';
const getOrders = async (req, res) => {
	try {
		const orders = await Orders.find();
		res.send(orders);
	} catch (error) {
		console.log(error.message);
	}
};
const getOrder = async (req, res) => {
	const { userId } = req.params;
	try {
		const order = await Orders.find({ userId: userId });
		res.status(200).json(order);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
const postOrder = async (req, res) => {
	const { orderId, userId, itemList, totalPrice } = req.body;
	try {
		const newOrder = await Orders.create({
			orderId,
			userId,
			itemList,
			totalPrice,
		});
		if (newOrder) {
			res.status(201).json({ message: 'Order success!' });
		} else res.status(500).json({ message: 'Something went wrong!' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
// const getOrder = async (req, res) => {
// 	try {
// 		const order = await Orders.findById(req.params.orderId);
// 		if (!order) {
// 			throw new Error('Order not found!');
// 		}
// 		res.status(200).json(order);
// 	} catch (error) {
// 		res.json({ error: error.message });
// 	}
// };
// const postOrder = async (req, res) => {
// 	res.send('Order created!');
// };
// const updateOrder = async (req, res) => {
// 	res.send('Order updated!');
// };
// const deleteOrder = async (req, res) => {
// 	res.send('Order deleted!');
// };
export { getOrders, getOrder, postOrder };
