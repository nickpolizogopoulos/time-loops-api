import { NextRequest, NextResponse } from 'next/server';
import softwareTools from '../data.json';
import { SoftwareTool } from '../../types';

type ReturnType = Promise<NextResponse<{message: string;}> | NextResponse<SoftwareTool>>;

// export const GET = async (request: NextRequest): ReturnType => {

//   const url = new URL(request.url);
//   const id = +(url.pathname.split('/').pop()!);

//   const tool = softwareTools.find(tool => tool.id === id);

//   if (!tool)
//     return NextResponse.json({ message: 'Tool not found' }, { status: 404 });

//   const response = NextResponse.json(tool);
//   response.headers.set('Access-Control-Allow-Origin', '*');
//   response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

//   return NextResponse.json(tool);
// };


export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const { pathname: url } = new URL(request.url);
  const id = Number(url.split('/').pop());

  if (isNaN(id)) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  const tool = softwareTools.find(tool => tool.id === id);

  if (!tool) {
    return NextResponse.json({ message: 'Tool not found' }, { status: 404 });
  }

  // Create the response
  const response = NextResponse.json(tool);

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return response;
};


export const DELETE = async (request: NextRequest): ReturnType => {

  const url = new URL(request.url);
  const id = parseInt(url.pathname.split('/').pop()!);

  const softwareToolId = softwareTools.findIndex(softwareTool => softwareTool.id === id);

  if (softwareToolId === -1)
    return NextResponse.json({ message: 'Software tool not found' }, { status: 404 });

  softwareTools.splice(softwareToolId, 1);

  return NextResponse.json({ message: 'Software tool deleted successfully' }, { status: 200 });
};