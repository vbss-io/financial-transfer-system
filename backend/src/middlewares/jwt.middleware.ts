import * as jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import IRequestUser from '../interfaces/requestUser.interface';
import IDecoded from '../interfaces/decoded.interface';
import { IUser } from '../interfaces/user.interface'; 
import 'dotenv/config';

const secret: string = process.env.JWT_SECRET || 'secret';

export default class jsonwebtoken {
  public static async generateToken(user: IUser): Promise<string> {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return token;
  }

  public static async verifyToken(
    req: IRequestUser,
    res: Response,
    next: NextFunction,
  ) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, secret) as IDecoded;

    req.user = decoded.data;

    return next();
  }
}