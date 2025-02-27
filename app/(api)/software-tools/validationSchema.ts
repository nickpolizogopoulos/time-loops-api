import { z } from 'zod';

export const softwareToolSchema = z.object({
    title: z.string().min(1, { message: 'Title is required.' }),
    description: z.string().min(10, { message: 'Description must be at least 10 characters long.' }),
    image: z.string().url({ message: 'Image must be a valid URL.' }),
    usage: z.string().min(5, { message: 'Usage must be at least 5 characters long.' }),
    category: z.enum([
        'programming-language',
        'runtime',
        'framework',
        'library',
        'query-language',
        'relational-database-management-system',
    ], { message: `Category must be one of the predefined values: "programming-language" | "runtime" | "framework" | "library" | "query-language" | "relational-database-management-system"` }),
    creators: z.array(
        z.object({
            name: z.string().min(1, { message: 'Creator name is required.' }),
            wiki: z.string().url({ message: 'Creator wiki must be a valid URL.' })
        })
    ).min(1, { message: 'At least one creator is required.' }),
    yearCreated: z.number()
        .int({ message: 'Year must be an integer.' })
        .min(1950, { message: 'Year must be 1950 or later.' })
        .max(new Date().getFullYear(), { message: 'Year cannot be in the future.' }),
    wiki: z.string().url({ message: 'Wiki must be a valid URL.' }),
});