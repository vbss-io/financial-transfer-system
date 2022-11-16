/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */

import { z } from 'zod';

export const userZodSchema = z.object({
  id: z.number().optional(),
  username: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string',
  }).min(3, {
    message: 'Username must be at least 3 characters',
  }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }).min(6, {
    message: 'Password must be at least 6 characters',
  }),
  accountId: z.number().optional(),
});

export type IUser = z.infer<typeof userZodSchema>;