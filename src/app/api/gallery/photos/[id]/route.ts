import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import GalleryPhoto from '@/models/GalleryPhoto';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const photoId = params.id;

    if (!mongoose.Types.ObjectId.isValid(photoId)) {
      return NextResponse.json({ message: 'Invalid photo ID' }, { status: 400 });
    }

    const photo = await GalleryPhoto.findById(photoId);

    if (!photo) {
      return NextResponse.json({ message: 'Photo not found' }, { status: 404 });
    }

    return NextResponse.json(photo);
  } catch (error: any) {
    console.error('Error fetching photo:', error);
    return NextResponse.json({ message: 'Failed to fetch photo', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const photoId = params.id;
    const photoData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(photoId)) {
      return NextResponse.json({ message: 'Invalid photo ID' }, { status: 400 });
    }

    const updatedPhoto = await GalleryPhoto.findByIdAndUpdate(photoId, photoData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPhoto) {
      return NextResponse.json({ message: 'Photo not found' }, { status: 404 });
    }

    return NextResponse.json(updatedPhoto);
  } catch (error: any) {
    console.error('Error updating photo:', error);
    return NextResponse.json({ message: 'Failed to update photo', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const photoId = params.id;

    if (!mongoose.Types.ObjectId.isValid(photoId)) {
      return NextResponse.json({ message: 'Invalid photo ID' }, { status: 400 });
    }

    const deletedPhoto = await GalleryPhoto.findByIdAndDelete(photoId);

    if (!deletedPhoto) {
      return NextResponse.json({ message: 'Photo not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Photo deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting photo:', error);
    return NextResponse.json({ message: 'Failed to delete photo', error: error.message }, { status: 500 });
  }
}
