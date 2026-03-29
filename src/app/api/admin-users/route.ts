import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import AdminUser from '@/models/AdminUser';

export async function GET() {
  try {
    await connectToDatabase();
    const adminUsers = await AdminUser.find().select('-password');
    return NextResponse.json(adminUsers);
  } catch (error: any) {
    console.error('Error fetching admin users:', error);
    return NextResponse.json({ message: 'Failed to fetch admin users', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const adminUserData = await req.json();

    if (!adminUserData.username || !adminUserData.email || !adminUserData.password) {
      return NextResponse.json({ message: 'Username, Email, and Password are required' }, { status: 400 });
    }

    const newAdminUser = new AdminUser(adminUserData);
    await newAdminUser.save();

    // Remove password from response
    const adminUserResponse = newAdminUser.toObject();
    delete adminUserResponse.password;

    return NextResponse.json(adminUserResponse, { status: 201 });
  } catch (error: any) {
    console.error('Error creating admin user:', error);
    return NextResponse.json({ message: 'Failed to create admin user', error: error.message }, { status: 500 });
  }
}
