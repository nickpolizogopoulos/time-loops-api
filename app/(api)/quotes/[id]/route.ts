import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import quotes from '../data.json';
import { quoteSchema } from '../validationSchema';


export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('GET');
  const id = +(url.pathname.split('/').pop()!);
  const quote = quotes.find(quote => quote.id === id);

  if (!quote)
    return NextResponse.json({ message: 'Quote not found' }, { status: 404, headers });

  return NextResponse.json(quote, { status: 200, headers });
};


export const DELETE = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const quoteIndex = quotes.findIndex(quote => quote.id === id);

  if (quoteIndex === -1) 
    return NextResponse.json({ message: 'Quote not found' }, { status: 404, headers });

  const [quote] = quotes.splice(quoteIndex, 1);

  return NextResponse.json(
    { message: `The Quote with id:${id} by ${quote.author}, has been deleted successfully.` },
    { status: 200, headers }
  );
};


export const PUT = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PUT');
  const id = parseInt(url.pathname.split('/').pop()!);
  const quoteIndex = quotes.findIndex(quote => quote.id === id);

  if (quoteIndex === -1) 
    return NextResponse.json({ message: 'Quote not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = quoteSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });
    
  quotes[quoteIndex] = { ...quotes[quoteIndex], ...body };

  return NextResponse.json(
    { 
      message: `The Quote with id:${id} by ${validation.data.author}, has been updated successfully.`,
      updatedQuote: quotes[quoteIndex]
    },
    { status: 200, headers }
  );
};


export const PATCH = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PATCH');
  const id = parseInt(url.pathname.split('/').pop()!);
  const quoteIndex = quotes.findIndex(quote => quote.id === id);

  if (quoteIndex === -1) 
    return NextResponse.json({ message: 'Quote not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = quoteSchema.partial().safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  quotes[quoteIndex] = { ...quotes[quoteIndex], ...body };

  return NextResponse.json(
    { 
      message: `The Quote with id:${id} by ${validation.data.author}, has been partially updated successfully.`,
      updatedQuote: quotes[quoteIndex]
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