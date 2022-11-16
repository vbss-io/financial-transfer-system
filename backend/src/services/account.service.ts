import AccountModel from '../models/account.model';
import IAccount from '../interfaces/account.interface';
import { ErrorTypes } from '../errors/catalog';

export default class AccountService {
  static async getAccount(_id: string): Promise<IAccount | null> {
    const account = await AccountModel.findByPk(_id);

    if (!account) {
      throw new Error(ErrorTypes.AccountNotFound);
    }

    return { balance: Number(account.balance) };
  }
}