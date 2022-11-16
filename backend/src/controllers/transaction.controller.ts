import { Response } from 'express';
import IRequestUser from '../interfaces/requestUser.interface';
import TransactionService from '../services/transaction.service';
// import AccountService from '../services/account.service';
// import { ErrorTypes } from '../errors/catalog';

export default class TransactionController {
  static async createTransaction(
    req: IRequestUser,
    res: Response,
  ) {
    const { value, creditedAccountId, debitedAccountId } = req.body;

    const transaction = await TransactionService.createTransaction({
      debitedAccountId, creditedAccountId, value,
    });

    return res.status(200).json(transaction);
  }
}