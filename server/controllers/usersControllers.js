import bcrypt from 'bcrypt';
import { User } from '../models/usersModel.js';

const postUser = async (req, res) => {
	const { userId, userName, email, password } = req.body;
	if (!(userName, email, password)) {
		res.status(400).json({ message: 'Please fill in all data fields!' });
		return;
	}
	const createUser = await User.create({
		userId,
		userName,
		email,
		password,
	});
	const salt = await bcrypt.genSalt(10);
	// set user password to hashed password
	createUser.password = await bcrypt.hash(createUser.password, salt);
	createUser.save().then((user) => res.status(201).json(user));
};
const loginUser = async (req, res) => {
	const { userName, password } = req.body;
	const user = await User.findOne({ userName: userName });
	if (user) {
		const isValid = bcrypt.compare(password, user.password);
		if (isValid) {
			res.status(200).json({
				userId: user.userId,
				email: user.email,
				userName: user.userName,
			});
		} else {
			res.status(400).json({ message: 'Invalid password!' });
		}
	} else {
		res.status(400).json({ message: 'User does not exist!' });
	}
};

export { postUser, loginUser };
