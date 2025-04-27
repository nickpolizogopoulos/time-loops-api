import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import softwareTools from '../data.json';
import { softwareToolSchema } from '../validationSchema';


export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const id = +(url.pathname.split('/').pop()!);
  const headers = getHeaders('GET');
  const tool = softwareTools.find(tool => tool.id === id);

  if (!tool)
    return NextResponse.json({ message: 'Software Tool not found' }, { status: 404, headers });

  return NextResponse.json(tool, { headers });
};


export const DELETE = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const toolIndex = softwareTools.findIndex(tool => tool.id === id);

  if (toolIndex === -1) 
    return NextResponse.json({ message: 'Software Tool not found' }, { status: 404, headers });

  const [tool] = softwareTools.splice(toolIndex, 1);

  return NextResponse.json(
    { message: `${tool.title} (${tool.category}) has been deleted successfully.` },
    { status: 200, headers }
  );
};


export const PUT = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PUT');
  const id = parseInt(url.pathname.split('/').pop()!);
  const toolIndex = softwareTools.findIndex(tool => tool.id === id);

  if (toolIndex === -1) 
    return NextResponse.json({ message: 'Software tool not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = softwareToolSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = softwareTools.some(tool => tool.title.toLowerCase() === body.title.toLowerCase() && tool.id !== id);

  if (alreadyExists)
    return NextResponse.json(
      { error: 'A Software Tool with this name already exists.' },
      { status: 409, headers }
    );
    
  softwareTools[toolIndex] = { ...softwareTools[toolIndex], ...body };

  return NextResponse.json(
    { 
      message: `${validation.data.title} (${validation.data.category}), has been updated successfully.`,
      updatedSoftwareTool: softwareTools[toolIndex]
    },
    { status: 200, headers }
  );
};


export const PATCH = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('PATCH');
  const id = parseInt(url.pathname.split('/').pop()!);
  const toolIndex = softwareTools.findIndex(tool => tool.id === id);

  if (toolIndex === -1) 
    return NextResponse.json({ message: 'Software tool not found' }, { status: 404, headers });

  const body = await request.json();
  const validation = softwareToolSchema.partial().safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400, headers });

  const alreadyExists = softwareTools.some(tool => tool.title.toLowerCase() === body.title.toLowerCase() && tool.id !== id);

  if (alreadyExists)
    return NextResponse.json(
      { error: 'A Software Tool with this name already exists.' },
      { status: 409, headers }
    );

  softwareTools[toolIndex] = { ...softwareTools[toolIndex], ...body };

  return NextResponse.json(
    { 
      message: `${validation.data.title} (${validation.data.category}), has been partially updated.`,
      updatedSoftwareTool: softwareTools[toolIndex]
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