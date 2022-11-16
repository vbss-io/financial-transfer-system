import { Router } from 'express';

import TransactionController from '../controllers/transaction.controller';
import jsonwebtoken from '../middlewares/jwt.middleware';

const transactionRouter = Router();

transactionRouter.post(
  '/cash-out',
  jsonwebtoken.verifyToken,
  TransactionController.createTransaction,
);

export default transactionRouter;