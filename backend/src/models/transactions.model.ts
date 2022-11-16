import * as Sequelize from 'sequelize';
import Transactions from '../database/models/Transactions';
import Accounts from '../database/models/Accounts';
import * as database from '../database/config/database';
import { ITransaction } from '../interfaces/transaction.interface';

const sequelize = new Sequelize.Sequelize(database)

export default class TransactionModel {
  static async create(cashTransaction: Partial<ITransaction>): Promise<ITransaction> {
    const { debitedAccountId, creditedAccountId, value } = cashTransaction;

    const result = await sequelize.transaction(async (t) => {
      const newTransaction = await Transactions.create(
        { debitedAccountId, creditedAccountId, value },
        { transaction: t },
      );

      await Accounts.update(
        { balance: Sequelize.literal(`balance - ${value}`) },
        { where: { id: debitedAccountId }, transaction: t },
      );

      await Accounts.update(
        { balance: Sequelize.literal(`balance + ${value}`) },
        { where: { id: creditedAccountId }, transaction: t },
      );

      return newTransaction;
    });

    return result.dataValues;    
  }
}