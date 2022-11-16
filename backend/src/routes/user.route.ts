import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/', UserController.create);
userRouter.get('/:id', UserController.findOne);

export default userRouter;