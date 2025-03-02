import { NextRequest, NextResponse } from 'next/server';
import quotes from '../data.json';
import { Quote } from '../../types';

type ReturnType = Promise<NextResponse<{ message: string; }> | NextResponse<Quote>>;

export const GET = async (request: NextRequest): ReturnType => {
  const url = new URL(request.url);
  const id = +(url.pathname.split('/').pop()!);
  const quote = quotes.find(quote => quote.id === id);

  if (!quote)
    return NextResponse.json({ message: 'Quote not found' }, { status: 404 });

  return NextResponse.json(quote);
};


export const DELETE = async (request: NextRequest): ReturnType => {
  const url = new URL(request.url);
  const id = parseInt(url.pathname.split('/').pop()!);
  const quoteId = quotes.findIndex(quote => quote.id === id);

  if (quoteId === -1)
    return NextResponse.json({ message: 'Quote not found' }, { status: 404 });

  quotes.splice(quoteId, 1);

  return NextResponse.json({ message: 'Quote deleted successfully' }, { status: 200 });
};