import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Faq from '@/models/Faq';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const faqId = params.id;

    if (!mongoose.Types.ObjectId.isValid(faqId)) {
      return NextResponse.json({ message: 'Invalid FAQ ID' }, { status: 400 });
    }

    const faq = await Faq.findById(faqId);

    if (!faq) {
      return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
    }

    return NextResponse.json(faq);
  } catch (error: any) {
    console.error('Error fetching FAQ:', error);
    return NextResponse.json({ message: 'Failed to fetch FAQ', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const faqId = params.id;
    const faqData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(faqId)) {
      return NextResponse.json({ message: 'Invalid FAQ ID' }, { status: 400 });
    }

    // Basic validation
    if (!faqData.question || !faqData.answer) {
      return NextResponse.json({ message: 'Question and answer are required' }, { status: 400 });
    }

    const updatedFaq = await Faq.findByIdAndUpdate(faqId, faqData, {
      new: true,
      runValidators: true,
    });

    if (!updatedFaq) {
      return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
    }

    return NextResponse.json(updatedFaq);
  } catch (error: any) {
    console.error('Error updating FAQ:', error);
    return NextResponse.json({ message: 'Failed to update FAQ', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const faqId = params.id;

    if (!mongoose.Types.ObjectId.isValid(faqId)) {
      return NextResponse.json({ message: 'Invalid FAQ ID' }, { status: 400 });
    }

    const deletedFaq = await Faq.findByIdAndDelete(faqId);

    if (!deletedFaq) {
      return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'FAQ deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting FAQ:', error);
    return NextResponse.json({ message: 'Failed to delete FAQ', error: error.message }, { status: 500 });
  }
}
