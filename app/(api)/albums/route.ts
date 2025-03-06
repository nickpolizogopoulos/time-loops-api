import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../headers';
import {
  type MusicAlbum
} from '../types';
import musicAlbums from './data.json';
import { musicAlbumSchema } from './validationSchema';


export const GET = async (): Promise<NextResponse<MusicAlbum[]>> => {
  const headers = getHeaders('GET');
  return NextResponse.json(musicAlbums as MusicAlbum[], {headers: headers});
};


export const POST = async (request: NextRequest) => {
  const body: MusicAlbum = await request.json();
  const headers = getHeaders('POST');
  const validation = musicAlbumSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers: headers });

  const id = musicAlbums.length + 1;
  const newAlbum = { ...body, id: id };

  return NextResponse.json(newAlbum, { status: 201, headers });
};