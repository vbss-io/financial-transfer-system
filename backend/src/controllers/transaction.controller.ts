import { Response } from 'express';
import RequestUser from '../interfaces/requestUser.interface';
import TransactionService from '../services/transaction.service';
import UserService from '../services/user.service';
import AccountService from '../services/account.service';
import { ErrorTypes } from '../errors/catalog';

export default class TransactionController {
  static async createTransaction(
    req: RequestUser,
    res: Response,
  ) {
    const { user } = req;
    const { value, creditedUsername } = req.body;

    const creditedUser = await UserService.findByUsername(creditedUsername);

    if (!creditedUser || creditedUser.id === user?.id) {
      throw new Error(ErrorTypes.InvalidUsername);
    }

    const debitedAccount = await AccountService.getAccount(String(user?.accountId));

    if (!debitedAccount || debitedAccount.balance < value) {
      throw new Error(ErrorTypes.NoBalance);
    }

    const transaction = await TransactionService.createTransaction({
      debitedAccountId: user?.accountId, creditedAccountId: creditedUser.accountId, value,
    });

    return res.status(200).json(transaction);
  }
}