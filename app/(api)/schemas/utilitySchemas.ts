import { z } from 'zod';

export const URL = z.string().url({ message: 'Invalid URL format' });

export const positiveNumber = z.number().int()
    .positive({ message: 'Please enter a number greater than 0' });
