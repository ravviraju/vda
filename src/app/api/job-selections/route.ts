import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import JobSelections from '@/models/JobSelections';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const items = await JobSelections.find().sort({ sort_order: 1 });
    return NextResponse.json(items);
  } catch (error: any) {
    console.error('Error fetching job selections:', error);
    return NextResponse.json({ message: 'Failed to fetch job selections', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const itemData = await req.json();
    
    // Basic validation for title
    if (!itemData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const newItem = new JobSelections(itemData);
    await newItem.save();

    return NextResponse.json(newItem, { status: 201 });
  } catch (error: any) {
    console.error('Error creating job selection:', error);
    return NextResponse.json({ message: 'Failed to create job selection', error: error.message }, { status: 500 });
  }
}
