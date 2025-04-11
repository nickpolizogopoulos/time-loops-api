import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../headers';
import { Quote } from '../types';
import quotes from './data.json';
import { quoteSchema } from './validationSchema';


export const GET = async (): Promise<NextResponse<Quote[]>> => {
  const headers = getHeaders('GET');
  return NextResponse.json(quotes, { status: 200, headers });
};


export const POST = async (request: NextRequest) => {
  const body: Quote = await request.json();
  const headers = getHeaders('POST');
  const validation = quoteSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = quotes.some(quote => quote.quote.toLowerCase() === body.quote.toLowerCase());

  if (alreadyExists)
    return NextResponse.json({ error: 'This Quote already exists.' }, { status: 409, headers });

  const id = quotes.length + 1;
  const newQuote = { ...body, id: id };

  quotes.push(newQuote);
  
  return NextResponse.json(newQuote, { status: 201, headers });
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