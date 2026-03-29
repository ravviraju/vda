import mongoose, { Schema, model, models } from 'mongoose';

const GalleryVideoSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }, // YouTube URL
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
}, { timestamps: true });

const GalleryVideo = models.GalleryVideo || model('GalleryVideo', GalleryVideoSchema);
export default GalleryVideo;
