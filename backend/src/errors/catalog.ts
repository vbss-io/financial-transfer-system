/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-shadow
export enum ErrorTypes {
  TokenNotFound = 'TokenNotFound',
  JsonWebTokenError = 'JsonWebTokenError',
  TokenExpiredError = 'TokenExpiredError',
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
    message: 'Usuário já existe',
    httpStatus: 409,
  },
  TokenNotFound: {
    message: 'Token não encontrado',
    httpStatus: 401,
  },
  InvalidCredentials: {
    message: 'Credenciais inválidas',
    httpStatus: 401,
  },
  AccountNotFound: {
    message: 'A conta não foi encontrada',
    httpStatus: 404,
  },
  InvalidUsername: {
    message: 'Nome de usuário inválido',
    httpStatus: 400,
  },
  NoBalance: {
    message: 'Saldo insuficiente',
    httpStatus: 400,
  },
  JsonWebTokenError: {
    message: 'Token inválido',
    httpStatus: 401,
  },
  TokenExpiredError: {
    message: 'Token expirado',
    httpStatus: 401,
  },
};