import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/users.js';
import ordersRouter from './routes/orders.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
async function connect() {
	await mongoose
		.connect(
			`mongodb+srv://K_T_R_S:ktrs053272@ecomerce.nhmw813.mongodb.net/Ecomerce?retryWrites=true&w=majority`,
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
			}
		)
		.then(() => console.log('Connected to mongoDB'))
		.catch((error) => console.log(error.message));
}
connect();
app.use('/auth', userRouter);
app.use('/orders', ordersRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
