import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../headers';
import { SoftwareTool } from '../types';
import softwareTools from './data.json';
import { softwareToolSchema } from './validationSchema';

export const GET = async () => {
  const headers = getHeaders('GET');
  return NextResponse.json(softwareTools, { status: 200, headers });
};


export const POST = async (request: NextRequest) => {
  const body: SoftwareTool = await request.json();
  const headers = getHeaders('POST');
  const validation = softwareToolSchema.safeParse(body);

  if (!validation.success) 
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const id = softwareTools.length + 1;
  const newSoftwareTool = { ...validation.data, id: id }; 

  return NextResponse.json(newSoftwareTool, { status: 201, headers });
};