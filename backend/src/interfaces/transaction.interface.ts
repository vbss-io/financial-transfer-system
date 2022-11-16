/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */

import { z } from 'zod';

export const transactionZodSchema = z.object({
  id: z.number().optional(),
  debitedAccountId: z.number().optional(),
  debitedUsername: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string',
  }).min(3, {
    message: 'Username must be at least 3 characters',
  }),
  creditedAccountId: z.number().optional(),
  creditedUsername: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string',
  }).min(3, {
    message: 'Username must be at least 3 characters',
  }),
  value: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }),
  createdAt: z.string().optional(),
});

export type ITransaction = z.infer<typeof transactionZodSchema>;