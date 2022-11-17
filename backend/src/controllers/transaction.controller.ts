import { Response } from 'express';
import { IUser } from '../interfaces/user.interface';
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

  static async findAllTransactions(
    req: IRequestUser,
    res: Response,
  ) {
    const { username, id } = req.user as IUser;

    const transactions = await TransactionService
      .findAllTransactions(username, Number(id));

    return res.status(200).json(transactions);
  }

  static async filterTransactions(
    req: IRequestUser,
    res: Response,
  ) {
    const { username, id } = req.user as IUser;
    const { date, op } = req.query;

    let transactions = await TransactionService.findAllTransactions(username, Number(id));

    if (date) {
      transactions = transactions.filter((transaction) => 
        transaction.createdAt?.includes(date as string));
    }

    if (op) {
      transactions = transactions.filter((transaction) =>
        transaction.operation === op);
    }

    return res.status(200).json(transactions);
  }
}