import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Facilities from '@/models/Facilities';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const facilityId = params.id;

    if (!mongoose.Types.ObjectId.isValid(facilityId)) {
      return NextResponse.json({ message: 'Invalid facility ID' }, { status: 400 });
    }

    const facility = await Facilities.findById(facilityId);

    if (!facility) {
      return NextResponse.json({ message: 'Facility not found' }, { status: 404 });
    }

    return NextResponse.json(facility);
  } catch (error: any) {
    console.error('Error fetching facility:', error);
    return NextResponse.json({ message: 'Failed to fetch facility', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const facilityId = params.id;
    const facilityData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(facilityId)) {
      return NextResponse.json({ message: 'Invalid facility ID' }, { status: 400 });
    }

    // Basic validation
    if (!facilityData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const updatedFacility = await Facilities.findByIdAndUpdate(facilityId, facilityData, {
      new: true,
      runValidators: true,
    });

    if (!updatedFacility) {
      return NextResponse.json({ message: 'Facility not found' }, { status: 404 });
    }

    return NextResponse.json(updatedFacility);
  } catch (error: any) {
    console.error('Error updating facility:', error);
    return NextResponse.json({ message: 'Failed to update facility', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const facilityId = params.id;

    if (!mongoose.Types.ObjectId.isValid(facilityId)) {
      return NextResponse.json({ message: 'Invalid facility ID' }, { status: 400 });
    }

    const deletedFacility = await Facilities.findByIdAndDelete(facilityId);

    if (!deletedFacility) {
      return NextResponse.json({ message: 'Facility not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Facility deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting facility:', error);
    return NextResponse.json({ message: 'Failed to delete facility', error: error.message }, { status: 500 });
  }
}
