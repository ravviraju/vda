import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import HomeStats from '@/models/HomeStats';

export async function GET() {
  try {
    await connectToDatabase();
    const stats = await HomeStats.find().sort({ sort_order: 1, createdAt: -1 });
    return NextResponse.json(stats);
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ message: 'Failed to fetch stats', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const statsData = await req.json();
    
    if (!statsData.number || !statsData.label) {
      return NextResponse.json({ message: 'Number and label are required' }, { status: 400 });
    }

    const newStats = new HomeStats(statsData);
    await newStats.save();

    return NextResponse.json(newStats, { status: 201 });
  } catch (error: any) {
    console.error('Error creating stats:', error);
    return NextResponse.json({ message: 'Failed to create stats', error: error.message }, { status: 500 });
  }
}
