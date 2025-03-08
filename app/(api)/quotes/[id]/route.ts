import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import quotes from '../data.json';

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
    { message: `The Quote with id ${id} (by ${quote.author}) has been deleted successfully.` },
    { status: 200, headers }
  );
};