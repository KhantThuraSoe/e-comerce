import mongoose from 'mongoose';
const orderSchema = mongoose.Schema({
	orderId: String,
	userInfo: { userId: String, email: String, userName: String },
	itemList: [
		{
			name: String,
			quantity: Number,
			price: Number,
		},
		{
			name: String,
			quantity: Number,
			price: Number,
		},
	],
	totalPrice: Number,
});
export const Orders = mongoose.model('Orders', orderSchema);
