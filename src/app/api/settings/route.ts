import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Settings from '@/models/Settings';

export async function GET() {
  try {
    await connectToDatabase();
    const settings = await Settings.find().sort({ key: 1 });
    return NextResponse.json(settings);
  } catch (error: any) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ message: 'Failed to fetch settings', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { key, value } = await req.json();

    if (!key || value === undefined) {
      return NextResponse.json({ message: 'Key and value are required' }, { status: 400 });
    }

    const setting = await Settings.findOneAndUpdate(
      { key },
      { value },
      { upsert: true, new: true, runValidators: true }
    );

    return NextResponse.json(setting);
  } catch (error: any) {
    console.error('Error saving setting:', error);
    return NextResponse.json({ message: 'Failed to save setting', error: error.message }, { status: 500 });
  }
}
