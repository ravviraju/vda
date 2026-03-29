import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Course from '@/models/Course';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const courseId = params.id;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return NextResponse.json({ message: 'Invalid course ID' }, { status: 400 });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return NextResponse.json({ message: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error: any) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ message: 'Failed to fetch course', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const courseId = params.id;
    const courseData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return NextResponse.json({ message: 'Invalid course ID' }, { status: 400 });
    }

    // Basic validation for title
    if (!courseData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const updatedCourse = await Course.findByIdAndUpdate(courseId, courseData, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    });

    if (!updatedCourse) {
      return NextResponse.json({ message: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(updatedCourse);
  } catch (error: any) {
    console.error('Error updating course:', error);
    return NextResponse.json({ message: 'Failed to update course', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const courseId = params.id;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return NextResponse.json({ message: 'Invalid course ID' }, { status: 400 });
    }

    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return NextResponse.json({ message: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Course deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ message: 'Failed to delete course', error: error.message }, { status: 500 });
  }
}
