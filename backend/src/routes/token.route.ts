import { Router } from 'express';

import jsonwebtoken from '../middlewares/jwt.middleware';

const verifyTokenRoute = Router();

verifyTokenRoute.get(
  '/',
  jsonwebtoken.verifyToken,
  async (_req, res) => {
    res.status(200).end();
  },
);

export default verifyTokenRoute;