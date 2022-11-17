import { Router } from 'express';

import TransactionController from '../controllers/transaction.controller';
import jsonwebtoken from '../middlewares/jwt.middleware';
import transactionValidator from '../middlewares/transactionValidator.middleware';

const transactionRouter = Router();

transactionRouter.post(
  '/cash-out',
  jsonwebtoken.verifyToken,
  transactionValidator.isBodyValid,
  transactionValidator.isDebitedUsernameValid,
  transactionValidator.isBalanceAccountValid,
  TransactionController.createTransaction,
);

transactionRouter.get(
  '/list/search',
  jsonwebtoken.verifyToken,
  TransactionController.filterTransactions,
);

transactionRouter.get(
  '/list',
  jsonwebtoken.verifyToken,
  TransactionController.findAllTransactions,
);

export default transactionRouter;