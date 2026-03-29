import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import HomeBanner from '@/models/HomeBanner';

export async function GET() {
  try {
    await connectToDatabase();
    const banners = await HomeBanner.find().sort({ sort_order: 1, createdAt: -1 });
    return NextResponse.json(banners);
  } catch (error: any) {
    console.error('Error fetching banners:', error);
    return NextResponse.json({ message: 'Failed to fetch banners', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const bannerData = await req.json();
    
    if (!bannerData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const newBanner = new HomeBanner(bannerData);
    await newBanner.save();

    return NextResponse.json(newBanner, { status: 201 });
  } catch (error: any) {
    console.error('Error creating banner:', error);
    return NextResponse.json({ message: 'Failed to create banner', error: error.message }, { status: 500 });
  }
}
