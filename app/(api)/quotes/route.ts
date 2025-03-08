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

  const id = quotes.length + 1;
  const newQuote = { ...body, id: id };
  
  return NextResponse.json(newQuote, { status: 201, headers });
};