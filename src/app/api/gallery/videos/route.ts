import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import GalleryVideo from '@/models/GalleryVideo';

export async function GET() {
  try {
    await connectToDatabase();
    const videos = await GalleryVideo.find().sort({ sort_order: 1, createdAt: -1 });
    return NextResponse.json(videos);
  } catch (error: any) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ message: 'Failed to fetch videos', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const videoData = await req.json();
    
    if (!videoData.title || !videoData.url) {
      return NextResponse.json({ message: 'Title and URL are required' }, { status: 400 });
    }

    const newVideo = new GalleryVideo(videoData);
    await newVideo.save();

    return NextResponse.json(newVideo, { status: 201 });
  } catch (error: any) {
    console.error('Error creating video:', error);
    return NextResponse.json({ message: 'Failed to create video', error: error.message }, { status: 500 });
  }
}
