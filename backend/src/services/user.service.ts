import UserModel from '../models/user.model';
import Bcrypt from '../middlewares/bcrypt.middleware';
import { IUser, userZodSchema } from '../interfaces/user.interface';

export default class UserService {
  static async createUser(user: IUser): Promise<IUser> {
    const parsed = userZodSchema.safeParse(user);

    if (!parsed.success) {
      throw parsed.error;
    }

    const newUser = {
      username: parsed.data.username,
      password: Bcrypt.hash(parsed.data.password),
    };

    return UserModel.create(newUser);
  }

  static async findByUsername(username: string): Promise<IUser | null> {
    return UserModel.findOne(username);
  }
}