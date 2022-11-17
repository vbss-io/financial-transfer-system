import { Router } from 'express';
import UserController from '../controllers/user.controller';
import loginValidator from '../middlewares/loginValidator.middleware';

const userRouter = Router();

userRouter.post('/create', UserController.createUser);
userRouter.post(
  '/login',
  loginValidator.isLoginValid,
  UserController.loginUser,
);

export default userRouter;