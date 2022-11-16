// eslint-disable-next-line no-shadow
export enum ErrorTypes {
  userNotFound = 'userNotFound',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number;
}

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
}

export const errorCatalog: ErrorCatalog = {
  userNotFound: {
    message: 'User not found',
    httpStatus: 404,
  },
};