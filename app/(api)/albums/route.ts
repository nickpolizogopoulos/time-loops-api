import {
  NextRequest,
  NextResponse
} from 'next/server';
import musicAlbums from './data.json'
import {
  type Month,
  type MusicAlbum
} from '../types';
import { musicAlbumSchema } from './validationSchema';
import { getHeaders } from '../headers';


export const GET = async (): Promise<NextResponse<MusicAlbum[]>> => {
  const albums: MusicAlbum[] = musicAlbums.map(album => ({
    ...album,
    releaseDate: {
      ...album.releaseDate,
      month: album.releaseDate.month as Month
    },
  }));

  const headers = getHeaders('GET');
  return NextResponse.json(albums, {headers: headers});
};


export const POST = async (request: NextRequest) => {
  const body: MusicAlbum = await request.json();
  const headers = getHeaders('POST');
  const validation = musicAlbumSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const id = musicAlbums.length + 1;
  const newAlbum = { ...body, id: id };

  return NextResponse.json(newAlbum, { status: 201, headers });
};