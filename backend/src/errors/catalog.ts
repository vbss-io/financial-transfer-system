/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-shadow
export enum ErrorTypes {
  TokenNotFound = 'TokenNotFound',
  JsonWebTokenError = 'JsonWebTokenError',
  AccountNotFound = 'AccountNotFound',
  InvalidCredentials = 'InvalidCredentials',
  SequelizeUniqueConstraintError = 'SequelizeUniqueConstraintError',
  InvalidUsername = 'InvalidUsername',
  NoBalance = 'NoBalance',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number;
}

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
}

export const errorCatalog: ErrorCatalog = {
  SequelizeUniqueConstraintError: {
    message: 'Username already in use',
    httpStatus: 409,
  },
  TokenNotFound: {
    message: 'Token not found',
    httpStatus: 401,
  },
  InvalidCredentials: {
    message: 'Invalid credentials',
    httpStatus: 401,
  },
  AccountNotFound: {
    message: 'Account not found',
    httpStatus: 404,
  },
  InvalidUsername: {
    message: 'Invalid username',
    httpStatus: 400,
  },
  NoBalance: {
    message: 'Insufficient balance',
    httpStatus: 400,
  },
  JsonWebTokenError: {
    message: 'Invalid token',
    httpStatus: 401,
  },
};