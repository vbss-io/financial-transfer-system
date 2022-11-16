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

  static async findOne(username: string): Promise<IUser | null> {
    const user = await Users.findOne({
      where: {
        username,
      },
    });
    return user;
  }
}