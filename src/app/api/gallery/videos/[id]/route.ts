import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import GalleryVideo from '@/models/GalleryVideo';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const videoId = params.id;

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return NextResponse.json({ message: 'Invalid video ID' }, { status: 400 });
    }

    const video = await GalleryVideo.findById(videoId);

    if (!video) {
      return NextResponse.json({ message: 'Video not found' }, { status: 404 });
    }

    return NextResponse.json(video);
  } catch (error: any) {
    console.error('Error fetching video:', error);
    return NextResponse.json({ message: 'Failed to fetch video', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const videoId = params.id;
    const videoData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return NextResponse.json({ message: 'Invalid video ID' }, { status: 400 });
    }

    const updatedVideo = await GalleryVideo.findByIdAndUpdate(videoId, videoData, {
      new: true,
      runValidators: true,
    });

    if (!updatedVideo) {
      return NextResponse.json({ message: 'Video not found' }, { status: 404 });
    }

    return NextResponse.json(updatedVideo);
  } catch (error: any) {
    console.error('Error updating video:', error);
    return NextResponse.json({ message: 'Failed to update video', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const videoId = params.id;

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return NextResponse.json({ message: 'Invalid video ID' }, { status: 400 });
    }

    const deletedVideo = await GalleryVideo.findByIdAndDelete(videoId);

    if (!deletedVideo) {
      return NextResponse.json({ message: 'Video not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Video deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting video:', error);
    return NextResponse.json({ message: 'Failed to delete video', error: error.message }, { status: 500 });
  }
}
