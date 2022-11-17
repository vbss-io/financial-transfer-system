import { Router } from 'express';

import AccountController from '../controllers/accounts.controller';
import jsonwebtoken from '../middlewares/jwt.middleware';

const accountRouter = Router();

accountRouter.get(
  '/balance',
  jsonwebtoken.verifyToken,
  AccountController.getAccount,
);

export default accountRouter;