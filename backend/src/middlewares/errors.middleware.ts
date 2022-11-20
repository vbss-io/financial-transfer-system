import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues[0].message });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const nameAsErrorType = err.name as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType] || errorCatalog[nameAsErrorType];

  if (mappedError) {
    const { message, httpStatus } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  console.log(err.name);
  console.log(err.message);
  return res.status(500).json({ message: 'Internal Error' });
}

export default errorHandler;