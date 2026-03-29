import mongoose, { Schema, model, models } from 'mongoose';

const HomeStatsSchema = new Schema({
  number: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String },
  sort_order: { type: Number, default: 0 },
}, { timestamps: true });

const HomeStats = models.HomeStats || model('HomeStats', HomeStatsSchema);
export default HomeStats;
