import { Response, NextFunction } from 'express';
import IRequestUser from '../interfaces/requestUser.interface';
import UserService from '../services/user.service';
import Bcrypt from './bcrypt.middleware';
import { userZodSchema } from '../interfaces/user.interface';
import { ErrorTypes } from '../errors/catalog';

export default class loginValidator {
  static async isLoginValid(
    req: IRequestUser,
    res: Response,
    next: NextFunction,
  ) {
    const { username, password } = req.body;

    const parsed = userZodSchema.safeParse({ username, password });

    if (!parsed.success) {
      throw new Error(ErrorTypes.InvalidCredentials);
    }

    const user = await UserService.findByUsername(username);

    if (!user || !Bcrypt.compare(password, user.password)) {
      throw new Error(ErrorTypes.InvalidCredentials);
    }

    req.user = user;
    return next();
  }
}