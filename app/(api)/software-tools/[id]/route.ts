import {
  NextRequest,
  NextResponse
} from 'next/server';

import { getHeaders } from '../../headers';
import softwareTools from '../data.json';


export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const id = +(url.pathname.split('/').pop()!);
  const headers = getHeaders('GET');
  const tool = softwareTools.find(tool => tool.id === id);

  if (!tool)
    return NextResponse.json({ message: 'Tool not found' }, { status: 404, headers });

  return NextResponse.json(tool, { headers });
};


export const DELETE = async (request: NextRequest) => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const toolIndex = softwareTools.findIndex(tool => tool.id === id);

  if (toolIndex === -1) 
    return NextResponse.json({ message: 'Album not found' }, { status: 404, headers });

  const [tool] = softwareTools.splice(toolIndex, 1);

  return NextResponse.json(
    { message: `The Software Tool with id ${id} (${tool.title}), has been deleted successfully.` },
    { status: 200, headers }
  );
};