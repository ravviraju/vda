import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import MedicalCounselling from '@/models/MedicalCounselling';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const items = await MedicalCounselling.find().sort({ sort_order: 1 });
    return NextResponse.json(items);
  } catch (error: any) {
    console.error('Error fetching medical counselling items:', error);
    return NextResponse.json({ message: 'Failed to fetch medical counselling items', error: error.message }, { status: 500 });
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

    const newItem = new MedicalCounselling(itemData);
    await newItem.save();

    return NextResponse.json(newItem, { status: 201 });
  } catch (error: any) {
    console.error('Error creating medical counselling item:', error);
    return NextResponse.json({ message: 'Failed to create medical counselling item', error: error.message }, { status: 500 });
  }
}
