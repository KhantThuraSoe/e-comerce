import { Orders } from '../models/ordersModel.js';
const postOrder = async (req, res) => {
	const { orderId, userInfo, itemList, totalPrice } = req.body;
	try {
		await Orders.create({
			orderId,
			userInfo,
			itemList,
			totalPrice,
		});
		res.status(200).json({ message: 'Order is successful!' });
	} catch (error) {
		res.status(404).json({ error: error.message });
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
export { postOrder };
