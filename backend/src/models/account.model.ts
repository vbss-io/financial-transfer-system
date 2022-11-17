import Accounts from '../database/models/Accounts';
import IAccount from '../interfaces/account.interface';

export default class AccountModel {
  static async findByPk(_id: string): Promise<IAccount | null> {
    return Accounts.findByPk(_id);
  }
}