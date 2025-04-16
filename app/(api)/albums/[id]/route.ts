import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import musicAlbums from '../data.json';
import { musicAlbumSchema } from '../validationSchema';


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
    return NextResponse.json({ message: 'Album not found' }, { status: 404, headers });

  const [album] = musicAlbums.splice(albumIndex, 1);

  return NextResponse.json(
    { message: `${album.title} by ${album.artist}, has been deleted successfully.` },
    { status: 200, headers }
  );
};


export const PUT = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PUT');
  const id = parseInt(url.pathname.split('/').pop()!);
  const albumIndex = musicAlbums.findIndex(album => album.id === id);

  if (albumIndex === -1) 
    return NextResponse.json({ message: 'Album not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = musicAlbumSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });
    
  musicAlbums[albumIndex] = { ...musicAlbums[albumIndex], ...body };

  return NextResponse.json(
    { 
      message: `The Album "${validation.data.title}", has been updated successfully.`,
      updatedAlbum: musicAlbums[albumIndex]
    },
    { status: 200, headers }
  );
};


export const PATCH = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PATCH');
  const id = parseInt(url.pathname.split('/').pop()!);
  const albumIndex = musicAlbums.findIndex(album => album.id === id);

  if (albumIndex === -1) 
    return NextResponse.json({ message: 'Album not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = musicAlbumSchema.partial().safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  musicAlbums[albumIndex] = { ...musicAlbums[albumIndex], ...body };

  return NextResponse.json(
    { 
      message: `The Album "${validation.data.title}" has been partially updated.`,
      updatedAlbum: musicAlbums[albumIndex]
    },
    { status: 200, headers }
  );
};


export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};