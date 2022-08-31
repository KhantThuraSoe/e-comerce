import mongoose from 'mongoose';
const orderSchema = mongoose.Schema({
	orderId: String,
	userId: String,
	userName: String,
	userEmail: String,
	productName: String,
	productQty: Number,
	productPrice: Number,
});
export const Orders = mongoose.model('Orders', orderSchema);
