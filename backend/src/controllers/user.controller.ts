import { Request, Response } from 'express';
import UserService from '../services/user.service';
import Bcrypt from '../middlewares/bcrypt.middleware';

export default class UserController {
  static async create(
    req: Request,
    res: Response,
  ) {
    const { username, password } = req.body;

    const hashedPassword = Bcrypt.hash(password);

    const user = await UserService.create({ username, password: hashedPassword });
    return res.status(201).json(user);
  }

  static async findOne(
    req: Request,
    res: Response,
  ) {
    console.log('entrou no findOne controller');
    const { id } = req.params;
    console.log('id: ', id);

    const user = await UserService.findOne(id);

    return res.status(200).json(user);
  }
}