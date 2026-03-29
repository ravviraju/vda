import mongoose, { Schema, model, models } from 'mongoose';

const MedicalCounsellingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
}, { timestamps: true });

const MedicalCounselling = models.MedicalCounselling || model('MedicalCounselling', MedicalCounsellingSchema);
export default MedicalCounselling;
