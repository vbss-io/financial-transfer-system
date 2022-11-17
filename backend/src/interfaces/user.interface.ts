/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */

import { z } from 'zod';

const regexPassword = /^(?=.*[A-Z])(?=.*\d).*$/;

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
  }).min(8, {
    message: 'Password must be at least 8 characters',
  }).regex((regexPassword), {
    message: 'Password must contain at least one uppercase letter and one number',
  }),
  accountId: z.number().optional(),
});

export type IUser = z.infer<typeof userZodSchema>;