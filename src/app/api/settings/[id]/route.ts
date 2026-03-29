import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Settings from '@/models/Settings';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const deletedSetting = await Settings.findByIdAndDelete(params.id);
    if (!deletedSetting) {
      return NextResponse.json({ message: 'Setting not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Setting deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting setting:', error);
    return NextResponse.json({ message: 'Failed to delete setting', error: error.message }, { status: 500 });
  }
}
