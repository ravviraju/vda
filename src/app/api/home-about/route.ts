import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import HomeAbout from '@/models/HomeAbout';

export async function GET() {
  try {
    await connectToDatabase();
    const homeAbout = await HomeAbout.findOne();
    return NextResponse.json(homeAbout || {});
  } catch (error: any) {
    console.error('Error fetching home about content:', error);
    return NextResponse.json({ message: 'Failed to fetch content', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const content = await req.json();
    
    const updatedHomeAbout = await HomeAbout.findOneAndUpdate(
      {},
      content,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json(updatedHomeAbout);
  } catch (error: any) {
    console.error('Error updating home about content:', error);
    return NextResponse.json({ message: 'Failed to update content', error: error.message }, { status: 500 });
  }
}
