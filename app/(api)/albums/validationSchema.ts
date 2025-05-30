import { z } from 'zod';

import { dateSchema } from '../schemas/dateSchema';
import {
  URL,
  nameLinkObject
} from '../schemas/utilitySchemas';

export const musicAlbumSchema = z.object({
  title: z.string().min(1, "Album title is required"),
  artist: z.string().min(1, "Artist name is required"),
  description: z.string().min(1, "Description is required"),
  releaseDate: dateSchema,
  genre: z.string().min(1, "Genre is required"),
  label: z.array(nameLinkObject).nonempty("At least one record label is required"),
  wiki: URL
});