/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-shadow
export enum ErrorTypes {
  UserNotFound = 'UserNotFound',
  SequelizeUniqueConstraintError = 'SequelizeUniqueConstraintError',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number;
}

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
}

export const errorCatalog: ErrorCatalog = {
  UserNotFound: {
    message: 'User not found',
    httpStatus: 404,
  },
  SequelizeUniqueConstraintError: {
    message: 'Username already in use',
    httpStatus: 409,
  },
};