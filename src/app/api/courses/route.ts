import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Course from '@/models/Course';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const courses = await Course.find().sort({ sort_order: 1 });
    return NextResponse.json(courses);
  } catch (error: any) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ message: 'Failed to fetch courses', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const courseData = await req.json();
    
    // Basic validation for title
    if (!courseData.title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }

    const newCourse = new Course(courseData);
    await newCourse.save();

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error: any) {
    console.error('Error creating course:', error);
    return NextResponse.json({ message: 'Failed to create course', error: error.message }, { status: 500 });
  }
}
