import UserModel from '../models/user.model';
import { IUser, userZodSchema } from '../interfaces/user.interface';
import { ErrorTypes } from '../errors/catalog';

export default class UserService {
  static async create(user: IUser): Promise<IUser> {
    const parsed = userZodSchema.safeParse(user);

    if (!parsed.success) {
      throw parsed.error;
    }

    return UserModel.create(parsed.data);
  }

  static async findOne(_id: string): Promise<IUser | null> {
    const user = await UserModel.findOne(_id);

    if (!user) {
      throw new Error(ErrorTypes.userNotFound);
    }

    return user;
  }

  static async findAll(): Promise<IUser[]> {
    return UserModel.findAll();
  }

  static async update(_id: string, user: IUser): Promise<IUser | null> {
    const parsed = userZodSchema.safeParse(user);

    if (!parsed.success) {
      throw parsed.error;
    }

    return UserModel.update(_id, parsed.data);
  }

  static async delete(_id: string): Promise<IUser | null> {
    const user = await UserModel.delete(_id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}