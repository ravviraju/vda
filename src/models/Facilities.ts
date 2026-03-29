import mongoose, { Schema, model, models } from 'mongoose';

const FacilitiesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
  is_highlight: { type: Boolean, default: false },
}, { timestamps: true });

const Facilities = models.Facilities || model('Facilities', FacilitiesSchema);
export default Facilities;
