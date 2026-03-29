import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import AdminUser from '@/models/AdminUser';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const adminUser = await AdminUser.findById(params.id).select('-password');
    if (!adminUser) {
      return NextResponse.json({ message: 'Admin user not found' }, { status: 404 });
    }
    return NextResponse.json(adminUser);
  } catch (error: any) {
    console.error('Error fetching admin user:', error);
    return NextResponse.json({ message: 'Failed to fetch admin user', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const adminUserData = await req.json();
    const adminUser = await AdminUser.findById(params.id);

    if (!adminUser) {
      return NextResponse.json({ message: 'Admin user not found' }, { status: 404 });
    }

    // Update fields
    if (adminUserData.username) adminUser.username = adminUserData.username;
    if (adminUserData.email) adminUser.email = adminUserData.email;
    if (adminUserData.password) adminUser.password = adminUserData.password;

    await adminUser.save();

    const adminUserResponse = adminUser.toObject();
    delete adminUserResponse.password;

    return NextResponse.json(adminUserResponse);
  } catch (error: any) {
    console.error('Error updating admin user:', error);
    return NextResponse.json({ message: 'Failed to update admin user', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const deletedAdminUser = await AdminUser.findByIdAndDelete(params.id);
    if (!deletedAdminUser) {
      return NextResponse.json({ message: 'Admin user not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Admin user deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting admin user:', error);
    return NextResponse.json({ message: 'Failed to delete admin user', error: error.message }, { status: 500 });
  }
}
