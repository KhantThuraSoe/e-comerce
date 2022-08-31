import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
	{
		userId: { type: String },
		userName: {
			type: String,
			require: [true, 'Name field can not be empty!'],
		},
		email: {
			type: String,
			require: [true, 'Email field can not be empty!'],
		},
		password: {
			type: String,
			require: [true, 'Password field can not be empty!'],
		},
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model('User', userSchema);
