import Users from '../database/models/Users';
import { IUser } from '../interfaces/user.interface';

export default class UserModel {
  static async create(user: IUser): Promise<IUser> {
    const newUser = await Users.create(user);
    return newUser;
  }

  static async findOne(_id: string): Promise<IUser | null> {
    const user = await Users.findOne({
      where: {
        id: _id,
      },
      attributes: {
        exclude: ['password'],
      },
    });
    return user;
  }

  static async findAll(): Promise<IUser[]> {
    const users = await Users.findAll();
    return users;
  }

  static async update(_id: string, user: IUser): Promise<IUser | null> {
    const updatedUser = await Users.update(user, {
      where: {
        id: _id,
      },
    });
    return updatedUser as unknown as IUser;
  }

  static async delete(_id: string): Promise<IUser | null> {
    const deletedUser = await Users.destroy({
      where: {
        id: _id,
      },
    });
    return deletedUser as unknown as IUser;
  }
}