import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Facilities from '@/models/Facilities';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const facilities = await Facilities.find().sort({ sort_order: 1 });
    return NextResponse.json(facilities);
  } catch (error: any) {
    console.error('Error fetching facilities:', error);
    return NextResponse.json({ message: 'Failed to fetch facilities', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const facilityData = await req.json();
    
    // Basic validation
    if (!facilityData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const newFacility = new Facilities(facilityData);
    await newFacility.save();

    return NextResponse.json(newFacility, { status: 201 });
  } catch (error: any) {
    console.error('Error creating facility:', error);
    return NextResponse.json({ message: 'Failed to create facility', error: error.message }, { status: 500 });
  }
}
