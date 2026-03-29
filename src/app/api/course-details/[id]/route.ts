import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import CourseDetail from '@/models/CourseDetail';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const id = params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    const courseDetail = await CourseDetail.findById(id);

    if (!courseDetail) {
      return NextResponse.json({ message: 'Course detail not found' }, { status: 404 });
    }

    return NextResponse.json(courseDetail);
  } catch (error: any) {
    console.error('Error fetching course detail:', error);
    return NextResponse.json({ message: 'Failed to fetch course detail', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const id = params.id;
    const data = await req.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    const updated = await CourseDetail.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ message: 'Course detail not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error('Error updating course detail:', error);
    return NextResponse.json({ message: 'Failed to update course detail', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const id = params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
    }

    const deleted = await CourseDetail.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: 'Course detail not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Course detail deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting course detail:', error);
    return NextResponse.json({ message: 'Failed to delete course detail', error: error.message }, { status: 500 });
  }
}
