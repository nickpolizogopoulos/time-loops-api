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

  const alreadyExists = softwareTools.some(tool => tool.title.toLowerCase() === body.title.toLowerCase());

  if (alreadyExists)
    return NextResponse.json(
      { error: 'A Software Tool with this name already exists.' },
      { status: 409, headers }
    );

  const id = softwareTools.length + 1;
  const newSoftwareTool = { ...body, id: id }; 

  softwareTools.push(newSoftwareTool);

  return NextResponse.json(
    {
      message: `${newSoftwareTool.title} has been added to the Software Tools list!`,
      softwareTool: newSoftwareTool
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