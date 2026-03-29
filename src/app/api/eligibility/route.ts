import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Eligibility from '@/models/Eligibility';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const eligibility = await Eligibility.find().sort({ sort_order: 1 });
    return NextResponse.json(eligibility);
  } catch (error: any) {
    console.error('Error fetching eligibility:', error);
    return NextResponse.json({ message: 'Failed to fetch eligibility', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const eligibilityData = await req.json();
    
    // Basic validation
    if (!eligibilityData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const newEligibility = new Eligibility(eligibilityData);
    await newEligibility.save();

    return NextResponse.json(newEligibility, { status: 201 });
  } catch (error: any) {
    console.error('Error creating eligibility:', error);
    return NextResponse.json({ message: 'Failed to create eligibility', error: error.message }, { status: 500 });
  }
}
