import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import GalleryPhoto from '@/models/GalleryPhoto';

export async function GET() {
  try {
    await connectToDatabase();
    const photos = await GalleryPhoto.find().sort({ sort_order: 1, createdAt: -1 });
    return NextResponse.json(photos);
  } catch (error: any) {
    console.error('Error fetching photos:', error);
    return NextResponse.json({ message: 'Failed to fetch photos', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const photoData = await req.json();
    
    if (!photoData.image) {
      return NextResponse.json({ message: 'Image is required' }, { status: 400 });
    }

    const newPhoto = new GalleryPhoto(photoData);
    await newPhoto.save();

    return NextResponse.json(newPhoto, { status: 201 });
  } catch (error: any) {
    console.error('Error creating photo:', error);
    return NextResponse.json({ message: 'Failed to create photo', error: error.message }, { status: 500 });
  }
}
