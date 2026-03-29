import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Eligibility from '@/models/Eligibility';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const eligibilityId = params.id;

    if (!mongoose.Types.ObjectId.isValid(eligibilityId)) {
      return NextResponse.json({ message: 'Invalid eligibility ID' }, { status: 400 });
    }

    const eligibility = await Eligibility.findById(eligibilityId);

    if (!eligibility) {
      return NextResponse.json({ message: 'Eligibility not found' }, { status: 404 });
    }

    return NextResponse.json(eligibility);
  } catch (error: any) {
    console.error('Error fetching eligibility:', error);
    return NextResponse.json({ message: 'Failed to fetch eligibility', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const eligibilityId = params.id;
    const eligibilityData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(eligibilityId)) {
      return NextResponse.json({ message: 'Invalid eligibility ID' }, { status: 400 });
    }

    // Basic validation
    if (!eligibilityData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const updatedEligibility = await Eligibility.findByIdAndUpdate(eligibilityId, eligibilityData, {
      new: true,
      runValidators: true,
    });

    if (!updatedEligibility) {
      return NextResponse.json({ message: 'Eligibility not found' }, { status: 404 });
    }

    return NextResponse.json(updatedEligibility);
  } catch (error: any) {
    console.error('Error updating eligibility:', error);
    return NextResponse.json({ message: 'Failed to update eligibility', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const eligibilityId = params.id;

    if (!mongoose.Types.ObjectId.isValid(eligibilityId)) {
      return NextResponse.json({ message: 'Invalid eligibility ID' }, { status: 400 });
    }

    const deletedEligibility = await Eligibility.findByIdAndDelete(eligibilityId);

    if (!deletedEligibility) {
      return NextResponse.json({ message: 'Eligibility not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Eligibility deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting eligibility:', error);
    return NextResponse.json({ message: 'Failed to delete eligibility', error: error.message }, { status: 500 });
  }
}
