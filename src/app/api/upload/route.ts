import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const folder = (formData.get('folder') as string) || 'others';

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const extension = file.name.split('.').pop();
    const filename = `${randomUUID()}.${extension}`;
    
    // Define the upload path
    // For local development, we'll save to the public/uploads folder
    // Note: In production, you might want to use S3, Cloudinary, etc.
    const publicPath = join(process.cwd(), 'public', 'uploads', folder);
    
    // Ensure the directory exists
    await mkdir(publicPath, { recursive: true });
    
    const filePath = join(publicPath, filename);
    await writeFile(filePath, buffer);

    // Return the relative path for database storage
    const relativePath = `/uploads/${folder}/${filename}`;

    return NextResponse.json({ 
      message: 'File uploaded successfully', 
      url: relativePath,
      filename: filename
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ message: 'Failed to upload file', error: error.message }, { status: 500 });
  }
}
