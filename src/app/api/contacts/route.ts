import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error: any) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ message: 'Failed to fetch contacts', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const contactData = await req.json();
    
    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.mobile || !contactData.message) {
      return NextResponse.json({ message: 'All fields (name, email, mobile, message) are required' }, { status: 400 });
    }

    const newContact = new Contact(contactData);
    await newContact.save();

    return NextResponse.json(newContact, { status: 201 });
  } catch (error: any) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ message: 'Failed to create contact', error: error.message }, { status: 500 });
  }
}
