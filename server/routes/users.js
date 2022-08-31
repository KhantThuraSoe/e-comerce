import express from 'express';
import { postUser, loginUser } from '../controllers/usersControllers.js';
const userRouter = express.Router();

userRouter.post('/register', postUser);
userRouter.post('/login', loginUser);
// userRouter.put('/register/:userId', putUser);

export default userRouter;
