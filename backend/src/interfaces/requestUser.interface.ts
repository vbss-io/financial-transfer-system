import { Request } from 'express';
import { IUser } from '../interfaces/user.interface';

export default interface IRequestUser extends Request {
  user?: IUser;
}