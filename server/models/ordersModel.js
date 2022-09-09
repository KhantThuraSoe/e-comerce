import mongoose from 'mongoose';
const orderSchema = mongoose.Schema(
	{
		orderId: String,
		userId: String,
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
	},
	{
		timestamps: true,
	}
);
export const Orders = mongoose.model('Orders', orderSchema);
