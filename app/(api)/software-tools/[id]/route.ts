import {
  NextRequest,
  NextResponse
} from 'next/server';
import { getHeaders } from '../../headers';
import { SoftwareTool } from '../../types';
import softwareTools from '../data.json';

type ReturnType = Promise<NextResponse<SoftwareTool> | NextResponse<{ message: string }>>;

export const GET = async (request: NextRequest): ReturnType => {
  const url = new URL(request.url);
  const id = +(url.pathname.split('/').pop()!);
  const headers = getHeaders('GET');
  const tool = softwareTools.find(tool => tool.id === id);

  if (!tool)
    return NextResponse.json({ message: 'Tool not found' }, { status: 404 });

  return NextResponse.json(tool, { headers: headers });
};


export const DELETE = async (request: NextRequest): ReturnType => {
  const url = new URL(request.url);
  const headers = getHeaders('DELETE');
  const id = parseInt(url.pathname.split('/').pop()!);
  const softwareToolId = softwareTools.findIndex(softwareTool => softwareTool.id === id);

  if (softwareToolId === -1)
    return NextResponse.json({ message: 'Software tool not found' }, { status: 404 });

  softwareTools.splice(softwareToolId, 1);

  return NextResponse.json({ message: 'Software tool deleted successfully' }, { status: 200, headers: headers });
};