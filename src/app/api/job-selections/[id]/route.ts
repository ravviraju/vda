import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import JobSelections from '@/models/JobSelections';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const itemId = params.id;

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return NextResponse.json({ message: 'Invalid item ID' }, { status: 400 });
    }

    const item = await JobSelections.findById(itemId);

    if (!item) {
      return NextResponse.json({ message: 'Job selection not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error: any) {
    console.error('Error fetching job selection:', error);
    return NextResponse.json({ message: 'Failed to fetch job selection', error: error.message }, { status: 500 });
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

    const updatedItem = await JobSelections.findByIdAndUpdate(itemId, itemData, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    });

    if (!updatedItem) {
      return NextResponse.json({ message: 'Job selection not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem);
  } catch (error: any) {
    console.error('Error updating job selection:', error);
    return NextResponse.json({ message: 'Failed to update job selection', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const itemId = params.id;

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return NextResponse.json({ message: 'Invalid item ID' }, { status: 400 });
    }

    const deletedItem = await JobSelections.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return NextResponse.json({ message: 'Job selection not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job selection deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting job selection:', error);
    return NextResponse.json({ message: 'Failed to delete job selection', error: error.message }, { status: 500 });
  }
}
