import * as Sequelize from 'sequelize';
import Users from '../database/models/Users';
import Accounts from '../database/models/Accounts';
import * as database from '../database/config/database';
import { IUser } from '../interfaces/user.interface';

const sequelize = new Sequelize.Sequelize(database)

export default class UserModel {
  static async create(user: IUser): Promise<IUser> {
    const result = await sequelize.transaction(async (t) => {
      const newAccount = await Accounts.create(
        {},
        { transaction: t },
      );

      const newUser = await Users.create({
        ...user,
        accountId: newAccount.dataValues.id,
      }, { transaction: t });

      return newUser;
    });

    return result.dataValues;
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