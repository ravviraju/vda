import mongoose, { Schema, model, models } from 'mongoose';

const GalleryPhotoSchema = new Schema({
  caption: { type: String },
  image: { type: String, required: true },
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
}, { timestamps: true });

const GalleryPhoto = models.GalleryPhoto || model('GalleryPhoto', GalleryPhotoSchema);
export default GalleryPhoto;
