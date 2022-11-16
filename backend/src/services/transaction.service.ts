import TransactionModel from '../models/transactions.model';
import { ITransaction } from '../interfaces/transaction.interface';

export default class TransactionService {
  static async createTransaction(transaction: Partial<ITransaction>): Promise<ITransaction> {
    const result = await TransactionModel.create(transaction);

    return result;
  }
}