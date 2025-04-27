import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import skyscrapers from '../data.json';
import { skyscraperSchema } from '../validationSchema';


export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('GET');
  const id = +(url.pathname.split('/').pop()!);

  const skyscraper = skyscrapers.find(skyscraper => skyscraper.id === id);

  if (!skyscraper) {
    return NextResponse.json({ message: 'Skyscraper not found' }, { status: 404, headers });
  }

  return NextResponse.json(skyscraper, { status: 200, headers });
};


export const DELETE = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const skyscraperIndex = skyscrapers.findIndex(skyscraper => skyscraper.id === id);

  if (skyscraperIndex === -1) 
    return NextResponse.json({ message: 'Skyscraper not found' }, { status: 404, headers });

  const [skyscraper] = skyscrapers.splice(skyscraperIndex, 1);

  return NextResponse.json(
    { message: `${skyscraper.title} has been deleted successfully.` },
    { status: 200, headers }
  );
};


export const PUT = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PUT');
  const id = parseInt(url.pathname.split('/').pop()!);
  const skyscraperIndex = skyscrapers.findIndex(skyscraper => skyscraper.id === id);

  if (skyscraperIndex === -1) 
    return NextResponse.json({ message: 'Skyscraper not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = skyscraperSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = skyscrapers.some(skyscraper => skyscraper.title.toLowerCase() === body.title.toLowerCase());

  if (alreadyExists)
    return NextResponse.json(
      { error: 'A Skyscraper with this title already exists.' },
      { status: 409, headers }
    );
    
  skyscrapers[skyscraperIndex] = { ...skyscrapers[skyscraperIndex], ...body };

  return NextResponse.json(
    { 
      message: `${validation.data.title} has been updated successfully.`,
      updatedSkyscraper: skyscrapers[skyscraperIndex]
    },
    { status: 200, headers }
  );
};


export const PATCH = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PATCH');
  const id = parseInt(url.pathname.split('/').pop()!);
  const skyscraperIndex = skyscrapers.findIndex(skyscraper => skyscraper.id === id);

  if (skyscraperIndex === -1) 
    return NextResponse.json({ message: 'Skyscraper not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = skyscraperSchema.partial().safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = skyscrapers.some(skyscraper => skyscraper.title.toLowerCase() === body.title.toLowerCase());

  if (alreadyExists)
    return NextResponse.json(
      { error: 'A Skyscraper with this title already exists.' },
      { status: 409, headers }
    );

  skyscrapers[skyscraperIndex] = { ...skyscrapers[skyscraperIndex], ...body };

  return NextResponse.json(
    { 
      message: `${validation.data.title} has been partially updated.`,
      updatedSkyscraper: skyscrapers[skyscraperIndex]
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