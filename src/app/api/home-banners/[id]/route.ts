import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import HomeBanner from '@/models/HomeBanner';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const bannerId = params.id;

    if (!mongoose.Types.ObjectId.isValid(bannerId)) {
      return NextResponse.json({ message: 'Invalid banner ID' }, { status: 400 });
    }

    const banner = await HomeBanner.findById(bannerId);

    if (!banner) {
      return NextResponse.json({ message: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json(banner);
  } catch (error: any) {
    console.error('Error fetching banner:', error);
    return NextResponse.json({ message: 'Failed to fetch banner', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const bannerId = params.id;
    const bannerData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(bannerId)) {
      return NextResponse.json({ message: 'Invalid banner ID' }, { status: 400 });
    }

    const updatedBanner = await HomeBanner.findByIdAndUpdate(bannerId, bannerData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBanner) {
      return NextResponse.json({ message: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json(updatedBanner);
  } catch (error: any) {
    console.error('Error updating banner:', error);
    return NextResponse.json({ message: 'Failed to update banner', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const bannerId = params.id;

    if (!mongoose.Types.ObjectId.isValid(bannerId)) {
      return NextResponse.json({ message: 'Invalid banner ID' }, { status: 400 });
    }

    const deletedBanner = await HomeBanner.findByIdAndDelete(bannerId);

    if (!deletedBanner) {
      return NextResponse.json({ message: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Banner deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting banner:', error);
    return NextResponse.json({ message: 'Failed to delete banner', error: error.message }, { status: 500 });
  }
}
