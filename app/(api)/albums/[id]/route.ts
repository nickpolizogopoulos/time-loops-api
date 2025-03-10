import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import musicAlbums from '../data.json';


export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const id = +(url.pathname.split('/').pop()!);
  const headers = getHeaders('GET');
  const album = musicAlbums.find(album => album.id === id);

  if (!album)
    return NextResponse.json({ message: 'Album not found' }, { status: 404, headers });
  
  return NextResponse.json(album, { status: 200, headers });
};


export const DELETE = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const albumIndex = musicAlbums.findIndex(album => album.id === id);

  if (albumIndex === -1) 
    return NextResponse.json({ message: 'Quote not found' }, { status: 404, headers });

  const [album] = musicAlbums.splice(albumIndex, 1);

  return NextResponse.json(
    { message: `The Album with id ${id} (${album.title} by ${album.artist}), has been deleted successfully.` },
    { status: 200, headers }
  );
};