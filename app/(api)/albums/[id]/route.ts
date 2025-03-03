import {
  NextRequest,
  NextResponse
} from 'next/server';
import { getHeaders } from '../../headers';
import { MusicAlbum } from '../../types';
import musicAlbums from '../data.json';

type ReturnType = Promise<NextResponse<MusicAlbum> | NextResponse<{ message: string }>>;

export const GET = async (request: NextRequest): ReturnType => {
  const url = new URL(request.url);
  const id = +(url.pathname.split('/').pop()!);
  const headers = getHeaders('GET');
  const album = musicAlbums.find(album => album.id === id) as MusicAlbum;

  if (!album)
    return NextResponse.json({ message: 'Album not found' }, { status: 404, headers: headers });
  
  return NextResponse.json(album, { headers: headers });
};


export const DELETE = async (request: NextRequest): ReturnType => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const albumId = musicAlbums.findIndex(album => album.id === id);

  if (albumId === -1)
    return NextResponse.json({ message: 'Album not found' }, { status: 404 });

  musicAlbums.splice(albumId, 1);

  return NextResponse.json({ message: 'Album deleted successfully' }, { status: 200, headers: headers });
};