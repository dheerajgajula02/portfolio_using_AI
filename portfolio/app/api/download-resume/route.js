import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');
  
  try {
    const files = fs.readdirSync(publicDir);
    const resumeFile = files.find(file => file.toLowerCase().includes('resume'));

    if (!resumeFile) {
      return new NextResponse('Resume not found', { status: 404 });
    }

    const filePath = path.join(publicDir, resumeFile);
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${resumeFile}"`,
        'Content-Type': 'application/pdf',
      },
    });
  } catch (error) {
    return new NextResponse('Error reading resume', { status: 500 });
  }
}
