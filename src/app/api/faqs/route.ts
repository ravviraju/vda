import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Faq from '@/models/Faq';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const faqs = await Faq.find().sort({ sort_order: 1 });
    return NextResponse.json(faqs);
  } catch (error: any) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json({ message: 'Failed to fetch FAQs', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const faqData = await req.json();
    
    // Basic validation
    if (!faqData.question || !faqData.answer) {
      return NextResponse.json({ message: 'Question and answer are required' }, { status: 400 });
    }

    const newFaq = new Faq(faqData);
    await newFaq.save();

    return NextResponse.json(newFaq, { status: 201 });
  } catch (error: any) {
    console.error('Error creating FAQ:', error);
    return NextResponse.json({ message: 'Failed to create FAQ', error: error.message }, { status: 500 });
  }
}
