import { Request, Response } from 'express';
import IRequestUser from '../interfaces/requestUser.interface';
import UserService from '../services/user.service';
import jsonwebtoken from '../middlewares/jwt.middleware';
import { IUser } from '../interfaces/user.interface';

export default class UserController {
  static async createUser(
    req: Request,
    res: Response,
  ) {
    const { username, password } = req.body;

    const user = await UserService.createUser({ username, password });

    const token: string = await jsonwebtoken.generateToken(user);

    return res.status(201).json({ username: user.username, accountId: user.accountId, token });
  }

  static async loginUser(
    req: IRequestUser,
    res: Response,
  ) {
    const { user } = req;

    const token: string = await jsonwebtoken.generateToken(user as IUser);

    return res.status(201).json({ username: user?.username, accountId: user?.accountId, token });
  }
}