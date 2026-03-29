import mongoose, { Schema, model, models } from 'mongoose';

const HomeBannerSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  button_text: { type: String },
  button_link: { type: String },
  image: { type: String },
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
}, { timestamps: true });

const HomeBanner = models.HomeBanner || model('HomeBanner', HomeBannerSchema);
export default HomeBanner;
