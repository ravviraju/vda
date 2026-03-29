import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import AboutContent from '@/models/AboutContent';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const content = await AboutContent.findOne();
    return NextResponse.json(content || {});
  } catch (error: any) {
    console.error('Error fetching about content:', error);
    return NextResponse.json({ message: 'Failed to fetch about content', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    
    let content = await AboutContent.findOne();
    if (content) {
      content = await AboutContent.findByIdAndUpdate(content._id, data, { new: true });
    } else {
      content = new AboutContent(data);
      await content.save();
    }

    return NextResponse.json(content, { status: 201 });
  } catch (error: any) {
    console.error('Error updating about content:', error);
    return NextResponse.json({ message: 'Failed to update about content', error: error.message }, { status: 500 });
  }
}
