import { z } from 'zod';

import { dateSchema } from '../schemas/dateSchema';
import {
    URL,
    nameLinkObject,
    positiveNumber
} from '../schemas/utilitySchemas';

type LocationKey = 'City' | 'Country' | 'Street';
const locationMessage = (key: LocationKey): z.ZodString => 
    z.string().min(3, { message: `Please provide the ${key} the Skyscraper is located.` });

export const skyscraperSchema = z.object({
    title: z.string().min(1, 'Skyscraper title is required'),
    subtitle: z.string().optional(),
    record: z.string().optional(),
    type: z.array(
        z.enum(
            [
                'Commercial',
                'Office',
                'Retail',
                'Residential',
                'Hotel',
                'Shopping Mall'
            ],
            { message: 'Each value must be either Commercial, Office, Retail, Residential, Hotel or Shopping Mall' }
        )
    ).nonempty("At least one type is required"),
    photo: URL,
    wiki: URL,
    website: URL,
    height: positiveNumber,
    numberOfElevators: positiveNumber,
    floorArea: positiveNumber,
    floorCount: positiveNumber,
    gallery: z.array(
        z.object({
            id: z.number().positive(),
            source: URL,
            alt: z.string().min(1).max(60),
        })
    ),
    architects: z.array(nameLinkObject),
    owners: z.array(nameLinkObject),
    architectureStyle: nameLinkObject,
    constructionStarted: dateSchema,
    constructionEnded: dateSchema,
    openedDate: dateSchema,
    location: z.object({
        city: locationMessage('City'),
        country: locationMessage('Country'),
        mapsLink: URL,
        street: locationMessage('Street')
    }),
    informationParagraphs: z.array(
        z.string().min(1, { message: 'Each paragraph must be a non-empty string' })
    )
});