import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import CourseDetail from '@/models/CourseDetail';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const course_id = searchParams.get('course_id');
    
    let query = {};
    if (course_id) {
      query = { course_id };
    }
    
    const courseDetails = await CourseDetail.find(query);
    return NextResponse.json(courseDetails);
  } catch (error: any) {
    console.error('Error fetching course details:', error);
    return NextResponse.json({ message: 'Failed to fetch course details', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    
    if (!data.course_id) {
      return NextResponse.json({ message: 'course_id is required' }, { status: 400 });
    }

    const newCourseDetail = new CourseDetail(data);
    await newCourseDetail.save();

    return NextResponse.json(newCourseDetail, { status: 201 });
  } catch (error: any) {
    console.error('Error creating course detail:', error);
    return NextResponse.json({ message: 'Failed to create course detail', error: error.message }, { status: 500 });
  }
}
