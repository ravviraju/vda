import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import HomeStats from '@/models/HomeStats';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const stats = await HomeStats.findById(params.id);
    if (!stats) {
      return NextResponse.json({ message: 'Stats not found' }, { status: 404 });
    }
    return NextResponse.json(stats);
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ message: 'Failed to fetch stats', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const statsData = await req.json();
    
    if (!statsData.number || !statsData.label) {
      return NextResponse.json({ message: 'Number and label are required' }, { status: 400 });
    }

    const updatedStats = await HomeStats.findByIdAndUpdate(params.id, statsData, { new: true });
    if (!updatedStats) {
      return NextResponse.json({ message: 'Stats not found' }, { status: 404 });
    }

    return NextResponse.json(updatedStats);
  } catch (error: any) {
    console.error('Error updating stats:', error);
    return NextResponse.json({ message: 'Failed to update stats', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const deletedStats = await HomeStats.findByIdAndDelete(params.id);
    if (!deletedStats) {
      return NextResponse.json({ message: 'Stats not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Stats deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting stats:', error);
    return NextResponse.json({ message: 'Failed to delete stats', error: error.message }, { status: 500 });
  }
}
