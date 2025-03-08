import { z } from 'zod';

export const quoteSchema = z.object({
    quote: z.string().min(4, { message: 'Quote must be at least 4 characters long.' }),
    author: z.string().min(1, { message: 'Author is required.' }),
    category: z.enum([
        'software-industry',
        'general',
        'creativity'
    ], { message: `Category must be either software-industry, general or creativity` })
});