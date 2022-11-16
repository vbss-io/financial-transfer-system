import { Response, NextFunction } from 'express';
import IRequestUser from '../interfaces/requestUser.interface';
import UserService from '../services/user.service';
import AccountService from '../services/account.service';
import { transactionZodSchema } from '../interfaces/transaction.interface';
import { ErrorTypes } from '../errors/catalog';

export default class loginValidator {
  static async isBodyValid(
    req: IRequestUser,
    res: Response,
    next: NextFunction,
  ) {
    const transaction = transactionZodSchema.safeParse(req.body);

    if (!transaction.success) {
      throw transaction.error;
    }

    next();
  }

  static async isDebitedUsernameValid(
    req: IRequestUser,
    res: Response,
    next: NextFunction,
  ) {
    const { user } = req;
    const { creditedUsername } = req.body;

    const creditedUser = await UserService.findByUsername(creditedUsername);

    if (!creditedUser || creditedUser.id === user?.id) {
      throw new Error(ErrorTypes.InvalidUsername);
    }

    req.body = {
      ...req.body,
      creditedAccountId: creditedUser?.accountId,
    };
    return next();
  }

  static async isBalanceAccountValid(
    req: IRequestUser,
    res: Response,
    next: NextFunction,
  ) {
    const { user } = req;
    const { value } = req.body;

    const debitedAccount = await AccountService.getAccount(String(user?.accountId));

    if (!debitedAccount || debitedAccount.balance < value) {
      throw new Error(ErrorTypes.NoBalance);
    }

    req.body = {
      ...req.body,
      debitedAccountId: user?.accountId,
    };
    return next();
  }
}