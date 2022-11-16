import { Response } from 'express';
import RequestUser from '../interfaces/requestUser.interface';
import AccountService from '../services/account.service';

export default class AccountController {
  static async getAccount(
    req: RequestUser,
    res: Response,
  ) {
    const { user } = req;

    const account = await AccountService.getAccount(String(user?.accountId));

    return res.status(200).json(account);
  }
}