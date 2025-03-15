import { z } from 'zod';

export const quoteSchema = z.object({
    quote: z.string().min(4, { message: 'Quote must be at least 4 characters long.' }),
    author: z.string().min(1, { message: 'Author is required.' }),
    category: z.enum(['technology',
        'wisdom',
        'education',
        'motivation',
        'success',
        'creativity',
        'philosophy',
        'strategy',
        'relationships',
        'life',
        'self-improvement',
        'gaming',
        'tv-series',
        'leadership',
        'psychology',
        'personal-growth',
        'love',
        'strength',
        'self-awareness',
        'ambition'
    ], { message: 'Category must be one of the following: technology, wisdom, education, motivation, success, creativity, philosophy, strategy, relationships, life, self-improvement, gaming, tv-series, leadership, psychology, personal-growth, love, strength, self-awareness, ambition.'})
});