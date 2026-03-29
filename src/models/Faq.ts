import mongoose, { Schema, model, models } from 'mongoose';

const FaqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
}, { timestamps: true });

const Faq = models.Faq || model('Faq', FaqSchema);
export default Faq;
