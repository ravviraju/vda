import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import MedicalCounselling from '@/models/MedicalCounselling';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const itemId = params.id;

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return NextResponse.json({ message: 'Invalid item ID' }, { status: 400 });
    }

    const item = await MedicalCounselling.findById(itemId);

    if (!item) {
      return NextResponse.json({ message: 'Medical counselling item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error: any) {
    console.error('Error fetching medical counselling item:', error);
    return NextResponse.json({ message: 'Failed to fetch medical counselling item', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const itemId = params.id;
    const itemData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return NextResponse.json({ message: 'Invalid item ID' }, { status: 400 });
    }

    // Basic validation for title
    if (!itemData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const updatedItem = await MedicalCounselling.findByIdAndUpdate(itemId, itemData, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    });

    if (!updatedItem) {
      return NextResponse.json({ message: 'Medical counselling item not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem);
  } catch (error: any) {
    console.error('Error updating medical counselling item:', error);
    return NextResponse.json({ message: 'Failed to update medical counselling item', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const itemId = params.id;

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return NextResponse.json({ message: 'Invalid item ID' }, { status: 400 });
    }

    const deletedItem = await MedicalCounselling.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return NextResponse.json({ message: 'Medical counselling item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Medical counselling item deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting medical counselling item:', error);
    return NextResponse.json({ message: 'Failed to delete medical counselling item', error: error.message }, { status: 500 });
  }
}
