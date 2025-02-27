import { NextRequest, NextResponse } from 'next/server';
import softwareTools from './data.json';
import { SoftwareTool } from '../types';
import { getHeaders } from '../headers';
import { softwareToolSchema } from './validationSchema';

export const GET = async (): Promise<NextResponse<SoftwareTool[]>> => {
  const headers = getHeaders('GET');
  return NextResponse.json(softwareTools, {headers: headers});
};

export const POST = async (request: NextRequest) => {
  const body: SoftwareTool = await request.json();
  const validation = softwareToolSchema.safeParse(body);
  const headers = getHeaders('GET');

  if (!validation.success) 
    return NextResponse.json(validation.error.format(), { status: 400, headers: headers });

  const id = softwareTools.length + 1;
  const newSoftwareTool = { ...validation.data, id: id }; 

  return NextResponse.json(newSoftwareTool, { status: 201, headers: headers });
};