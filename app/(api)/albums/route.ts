import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../headers';
import { type MusicAlbum } from '../types';
import musicAlbums from './data.json';
import { musicAlbumSchema } from './validationSchema';


export const GET = async (): Promise<NextResponse<MusicAlbum[]>> => {
  const headers = getHeaders('GET');
  return NextResponse.json(musicAlbums as MusicAlbum[], { status: 200, headers });
};


export const POST = async (request: NextRequest) => {
  const body: MusicAlbum = await request.json();
  const headers = getHeaders('POST');
  const validation = musicAlbumSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = musicAlbums.some(album => album.title.toLowerCase() === body.title.toLowerCase());

  if (alreadyExists)
    return NextResponse.json({ error: 'A Music Album with this title already exists.' }, { status: 409, headers });

  const id = musicAlbums.length + 1;
  const newAlbum = { ...body, id: id };

  return NextResponse.json(newAlbum, { status: 201, headers });
};


export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  });
};