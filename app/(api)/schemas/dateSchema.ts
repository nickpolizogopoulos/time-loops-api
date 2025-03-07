import { z } from 'zod';

import { monthSchema } from './monthSchema';

export const dateSchema = z.object({
    day: z.number()
      .int('Day must be an integer')
      .min(1, 'Day must be at least 1')
      .max(31, 'Day cannot be more than 31'),
    month: monthSchema,
    year: z.number()
      .int('Year must be an integer')
      .min(1900, 'Year must be at least 1900')
      .max(new Date().getFullYear(), 'Year cannot be in the future'),
  });