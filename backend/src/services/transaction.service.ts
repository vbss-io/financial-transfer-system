import TransactionModel from '../models/transactions.model';
import { ITransaction } from '../interfaces/transaction.interface';

export default class TransactionService {
  static async createTransaction(transaction: Partial<ITransaction>): Promise<ITransaction> {
    const result = await TransactionModel.create(transaction);

    return result;
  }

  static formatTransactions(transactions: ITransaction[]): ITransaction[] {
    const format = transactions.map((transaction) => {
      const { id, value, createdAt, debitedAccount, creditedAccount } = transaction;
        return {
          id,
          value,
          createdAt: createdAt && new Date(createdAt).toLocaleString(),
          debitedAccount: debitedAccount?.User.username,
          creditedAccount: creditedAccount?.User.username,
        }
    }) as unknown as ITransaction[];

    return format;
  }

  static async findAllTransactions(_id: number): Promise<ITransaction[]> {
    const transactions = await TransactionModel.findAll(_id);
    return this.formatTransactions(transactions);
  }
}