import {
  NextRequest,
  NextResponse
} from 'next/server';

import { generateNumericId } from '../generate-numeric-id';
import { getHeaders } from '../headers';
import { type Skyscraper } from '../types';
import skyscrapers from './data.json';
import { skyscraperSchema } from './validationSchema';


export const GET = async () => {
  const headers = getHeaders('GET');
  return NextResponse.json(skyscrapers as Skyscraper[], { status: 200, headers });
};


export const POST = async (request: NextRequest) => {
  const body: Skyscraper = await request.json();
  const headers = getHeaders('POST');
  const validation = skyscraperSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = skyscrapers.some(skyscraper => skyscraper.title.toLowerCase() === body.title.toLowerCase());

  if (alreadyExists)
    return NextResponse.json(
      { error: 'A Skyscraper with this title already exists.' },
      { status: 409, headers }
    );

  const id = generateNumericId();
  const newSkyscraper = { ...body, id: id };

  skyscrapers.push(newSkyscraper);

  return NextResponse.json(
    {
      message: `${newSkyscraper.title} has been added to the Skyscrapers list!`,
      skyscraper: newSkyscraper
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
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  });
};