import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import mongoose from 'mongoose';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const contactId = params.id;

    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      return NextResponse.json({ message: 'Invalid contact ID' }, { status: 400 });
    }

    const updatedContact = await Contact.findByIdAndUpdate(contactId, { is_read: true }, {
      new: true,
      runValidators: true,
    });

    if (!updatedContact) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json(updatedContact);
  } catch (error: any) {
    console.error('Error updating contact:', error);
    return NextResponse.json({ message: 'Failed to update contact', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const contactId = params.id;

    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      return NextResponse.json({ message: 'Invalid contact ID' }, { status: 400 });
    }

    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Contact deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting contact:', error);
    return NextResponse.json({ message: 'Failed to delete contact', error: error.message }, { status: 500 });
  }
}
